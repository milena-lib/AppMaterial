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
  styleUrls: ['./expander.component.scss'],  
  // trigger('bodyExpansion', [
  //   state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
  //   state('expanded', style({ height: '*', visibility: 'visible' })),
  //   transition('expanded <=> collapsed, void => collapsed',
  //     animate('10000ms cubic-bezier(0.4,0.0,0.2,1)')),
  // ]);
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
