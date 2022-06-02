import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-dual-list',
  templateUrl: './drag-drop-dual-list.component.html',
  styleUrls: ['./drag-drop-dual-list.component.scss']
})
export class DragDropDualListComponent implements OnInit {
  availableItems: any[] = [];
  selectedItems: any[] = [];
  currentSelectItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.availableItems = [
      { id: '1', name: 'Item 1'},
      { id: '2', name: 'Item 2'},
      { id: '3', name: 'Item 3'},
      { id: '4', name: 'Item 4'},
      { id: '5', name: 'Item 5'},
      { id: '6', name: 'Item 6'},
    ]
  }

  onItemsMoved(event): void {
    this.currentSelectItems = event.selected;
  }

}
