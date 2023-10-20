import { Component, OnInit } from '@angular/core';
import {
  animate,
  animateChild,
  group,
  state,
  style,
  transition,
  trigger,
  query,
  AnimationTriggerMetadata,
} from '@angular/animations';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent implements OnInit {
  shouldOpenPanel1 = true;
  shouldOpenChildPanel1 = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClickHeader($event) {
    console.log("onClickHeader: ", $event);
    console.log("shouldOpenChildPanel1: ", this.shouldOpenChildPanel1);
  }

  openGroup($event) {
    this.shouldOpenChildPanel1 = true;
    console.log("openGroup: ", $event);
  }

  closedGroup($event) {
    this.shouldOpenChildPanel1 = false;
    console.log("closedGroup: ", $event);
  }

}
