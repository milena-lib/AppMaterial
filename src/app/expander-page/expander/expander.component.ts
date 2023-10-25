import { Component, Input, OnInit, TemplateRef } from '@angular/core';
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
  @Input() expanderData: any = [];
  expanderDataSource: any = [];

  @Input() public expandedChildTemplate!: TemplateRef<any>;

  icon: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if(this.expanderData?.length > 0) {
      this.expanderDataSource = this.expanderData;
    }
  }

  click(){
    this.icon = !this.icon;
  }

  openGroup($event: any, i: number) {
    this.expanderDataSource[i].hasChildExpander = true;

    console.log("openGroup: ", $event);
  }

  closedGroup($event: any, i: number) {
    this.expanderDataSource[i].hasChildExpander = false;
    console.log("closedGroup: ", $event);
  }

}
