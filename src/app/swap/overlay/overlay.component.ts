import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  showBox = false;

  constructor() { }

  ngOnInit(): void {
  }

  openShowBox(e: Event) {
    e.stopPropagation();
    this.showBox = !this.showBox;
  }
  
  onClickedOutside(e: Event) {
    this.showBox = false;
  }
}
