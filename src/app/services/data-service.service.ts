import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDataLoadedEmitter: EventEmitter<any> = new EventEmitter<any>();
  
  private userData: any;

  private setData(response){
    debugger;
    this.userData = response;
    this.userDataLoadedEmitter.emit(null);
  }
  getData(){
    debugger;
    return this.userData;
  }

  urlData1 = "//jsonplaceholder.typicode.com/posts?id=1";
  urlData2 = "//jsonplaceholder.typicode.com/posts?id=2";


  constructor(public http: HttpClient) { }

  getUserData1(): Observable<any> {
    return this.http.get(this.urlData1, {}).pipe(map(data => {
      // debugger;
      // console.log("urlData1: ", data);
    }),
    mergeMap(data=> this.http.get(this.urlData2, {}).pipe(map(data => {
      // console.log("urlData2: ", data);
      return data;
      
    }),
      catchError(err => {
        // console.log("err9876: ", err);
        return throwError(err);
      })
    )));
  }

  getUserData2(): Observable<any> {
    return this.http.get(this.urlData1, {}).pipe(
      switchMap(data=> this.http.get(this.urlData2, {}).pipe(map(data1 =>{
        // console.log("urlData1: ", data);
        // console.log("urlData2: ", data1);
        return data1;
      }))
      ),
      catchError(err => {
        // console.log("err9876: ", err);
        return throwError(err);
      })
    );
  }

  // setUser1DataByApi(){
  //   this.http.get('//jsonplaceholder.typicode.com/users?id=1').toPromise()
  //            .then((response)=>{
  //               this.setData(response);
  //            })
  //            .catch(ex=>console.log('ex', ex));
  // }

  // setUser2DataByApi(){
  //   return new Promise((resolve, reject) => {
  //                  this.http.get('//jsonplaceholder.typicode.com/users?id=2').toPromise()
  //                   .then((response)=>{
  //                     resolve(response)
  //                   }).catch( ex=>reject(ex));
  //  })
  // }

}
