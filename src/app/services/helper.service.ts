import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IGridEvents } from '../interfaces/i-grid-events';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  readonly gridEvent$ = new Subject<IGridEvents>();

  setGridEvent(row, column, componentName) {
    let gridEvent: IGridEvents;
    gridEvent.row = row;
    gridEvent.column = column;
    gridEvent.component = componentName;
    
    this.gridEvent$.next(gridEvent);
  }
}
