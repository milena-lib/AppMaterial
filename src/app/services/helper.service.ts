import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IGridEvents } from '../interfaces/i-grid-events';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public isMobile: boolean = window.innerWidth <= 360 ? true : false;
  constructor() { }

  readonly gridEvent$ = new Subject<IGridEvents>();
  readonly isSubmitForm$ = new Subject<boolean>();

  setGridEvent(row, column, componentName) {
    let gridEvent: IGridEvents = {row: row, column: column, component: componentName};
    
    this.gridEvent$.next(gridEvent);
  }

  setSubmitForm() {
    this.isSubmitForm$.next(true);
  }

  getSubmitForm() {
    return this.isSubmitForm$;
  }
  
}
