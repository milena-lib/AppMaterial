import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, from, fromEvent, interval, Observable, of, throwError } from 'rxjs';
import { catchError, map, delay, mergeMap, switchMap, mergeAll, switchAll, concatMap } from 'rxjs/operators';
import { Product } from '../classes/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  @ViewChild('button', {static:true}) button;
  clicks$: Observable<any>;

  userData: any;

  carData = of([
    {
      brand: 'porsche',
      model: '911'
    },
    {
      brand: 'porsche',
      model: 'macan'
    },
    {
      brand: 'ferarri',
      model: '458'
    },
    {
      brand: 'lamborghini',
      model: 'urus'
    }
  ]);

  constructor(private _Activatedroute: ActivatedRoute,
    private service: ProductService,
    private http: HttpClient,
    private userSrv: DataService) { }



  ngOnInit(): void {
    // this.switchMapExample();

    // this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    // this.switchExample();
    console.log("car data 1: ", this.carData);

    this.userSrv.getUserData2().subscribe(
      data => {
          if(!data) {
            //TODO
            return;
          }
          this.userData = data;
          console.log("data: ", data);
       },
      error => {
        //TODO
          // this.loading = false;
    });

    this.carData
    .pipe(
      map(cars => cars.map(car => `${car.brand} ${car.model}`))
    ).subscribe(cars => console.log("car data 2: ", cars));

    
    this.carData
      .pipe(
        map(cars => cars.filter(car => car.brand === 'porsche'))
    ).subscribe(cars => console.log("car data 3: ", cars))
   
    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      )
    }

    from([1,2,3,4]).pipe(
      map(param => getData(param))
    ).subscribe(val => val.subscribe(data => console.log("car data: ", data)));

    from([1,2,3,4]).pipe(
      map(param => getData(param)),
      mergeAll()
    ).subscribe(val => console.log("mergeAll: ", val));

    from([1,2,3,4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log("mergeMap: ", val));

    from([1,2,3,4]).pipe(
      map(param => getData(param)),
      switchAll()
    ).subscribe(val => console.log("switchAll: ", val));

    from([1,2,3,4]).pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log("switchMap: ", val));
    
    const filters = ['brand=porsche', 'model=911', 'horsepower=389', 'color=red']
    const activeFilters = new BehaviorSubject('');
    
    const applyFilters = () => {
      filters.forEach((filter, index) => {
        let newFilters = activeFilters.value;
        if (index === 0) {
          newFilters = `?${filter}`
        } else {
          newFilters = `${newFilters}&${filter}`
        }
    
        activeFilters.next(newFilters);
      })
    }

    activeFilters.pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log("activeFilters: ", val));
    
    applyFilters();


    const getData1 = (param) => {
      const delayTime = Math.floor(Math.random() * 10000) + 1;
      return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
        delay(delayTime)
      )
    };

    // from([1,2,3,4]).pipe(
    //   map(param => getData1(param))
    // ).subscribe(val => val.subscribe(data => console.log('map 1:', data)));
    
    // // using mergeMap
    // from([1, 2, 3 ,4]).pipe(
    //   mergeMap(param => getData1(param))
    // ).subscribe(val => console.log('mergeMap 1:', val));
    
    // using concatMap
    from([1, 2, 3 ,4]).pipe(
      concatMap(param => getData1(param))
    ).subscribe(val => console.log('concatMap 1:', val));
    
    
  }
  
  // switchExample() {
  //   this.clicks$
  //     .pipe(
  //       switchMap(() => {
  //         return interval(500)
  //       })
  //     )
  //     .subscribe( val => console.log(val));
  // }

  // switchMapExample() {
  //   let srcObservable= of(1,2,3,4)
  //   let innerObservable= of('A','B','C','D')
     
  //   srcObservable.pipe(
  //     switchMap( val => {
  //       console.log('Source value '+val);
  //       console.log('starting new observable');
  //       return innerObservable;
  //     })).subscribe(ret=> {
  //     console.log('Recd ' + ret);
  //   });
  // }

  
}
