import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent implements OnInit {
  shouldOpenPanel1 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
