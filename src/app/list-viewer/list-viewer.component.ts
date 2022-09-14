import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.scss']
})
export class ListViewerComponent implements OnInit {
  @Input() list: string[];
  @Output() itemSelected = new EventEmitter<string>();
  @Input() selectedItem: string | null;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedItem(item: string) {
    this.itemSelected.emit(item);
  }
}
