import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter, catchError, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const APIKEY = 'e8067b53';

@Component({
  selector: 'app-search-debounce-time',
  templateUrl: './search-debounce-time.component.html',
  styleUrls: ['./search-debounce-time.component.scss']
})
export class SearchDebounceTimeComponent implements OnInit {
  @ViewChild('movieSearchInput', { static: true })
  movieSearchInput!: ElementRef;
  apiResponse: any = [];
  isSearching: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    fromEvent(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        filter((res) => res.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((term: string) => {
          this.isSearching = true;
          return this.searchGetCall(term);
        })
      )
      .subscribe({
        next: (res) => {
          this.isSearching = false;
          this.apiResponse = res;
        },
        error: (err) => {
          this.isSearching = false;
          console.error('error', err);
        },
      });
  }

  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }

    let params = new HttpParams().set('s', term).set('apikey', APIKEY);

    return this.httpClient.get('http://www.omdbapi.com/', { params }).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

}
