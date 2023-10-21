import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Observable, fromEvent } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  checked: boolean = false;
  flipped: boolean = false;
  cardsList = [
    {
      text: 'בדיקת מכשיר',
      price: '99',
      priceNotVat: '84.62'
    },
    {
      text: 'נזק לקוח - מסך',
      price: '159.12',
      priceNotVat: '136'
    },
    {
      text: 'נזק לקוח - אחר',
      price: '54.99',
      priceNotVat: '47'
    },
    {
      text: 'מימוש אובדן/גניבה',
      price: '0',
      priceNotVat: '0'
    },
    {
      text: 'מימוש נזק בלתי הפיך',
      price: '718.87',
      priceNotVat: '614.42'
    },
    {
      text: 'שליחות (עלות לכיוון)',
      price: '100',
      priceNotVat: '85.47'
    },
    {
      text: 'מחיר סוללה ללא אחריות',
      price: '48.58',
      priceNotVat: '41.52'
    },
    {
      text: 'חידוש מעטפת מכשיר',
      price: '128.99',
      priceNotVat: '110.25'
    }
  ];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  // private readonly document = inject(DOCUMENT);
  // private readonly viewport = inject(ViewportScroller);

  // readonly showScroll$: Observable<boolean> = fromEvent(
  //   this.document,
  //   'scroll'
  // ).pipe(
  //   map(() => this.viewport.getScrollPosition()?.[1] > 0)
  // );

  // onScrollToTop(): void {
  //   this.viewport.scrollToPosition([0, 0]);
  // }
}
