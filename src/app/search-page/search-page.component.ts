import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  selectedItem: string | null = null;
  searchWord = '';
  result: string[] = [];
  isBusy = false;

  constructor() {
  }

  testButton(e: any) {
    console.log('button clicked', e);
  }

  setSelectedItem(item: string) {
    if (item.includes('4')) {
      alert('לצערנו לא ניתן לבחור פריט זה');
    } else {
      this.selectedItem = item;
    }
  }

  doSearch() {
    this.isBusy = true;
    this.result = [];
    let arr: string[] = [];
    setTimeout(() => {
      for (let index = 0; index < 9; index++) {
        arr.push(this.searchWord + index);
      }
      this.result = arr;
      this.selectedItem = this.result[2];
      this.isBusy = false;
    }, 2500);
  }

}
