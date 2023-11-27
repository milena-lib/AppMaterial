import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-debounce',
  templateUrl: './search-debounce.component.html',
  styleUrls: ['./search-debounce.component.scss']
})
export class SearchDebounceComponent implements OnInit {
  title = 'CodeSandbox';
  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 300; // Set the debounce time (in milliseconds)
  inputText: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(this.debounceTimeMs))
      .subscribe((searchValue) => {
        this.performSearch(searchValue);
      });
  }

  onSearch() {
    this.searchSubject.next(this.inputText);
  }

  performSearch(searchValue: string) {
    // Perform the actual search operation here
    console.log('Performing search for:', searchValue);
    // ... Your search logic ...
  }

  ngOnDestroy() {
    this.searchSubject.complete();
  }

}
