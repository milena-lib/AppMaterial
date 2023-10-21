import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander-page',
  templateUrl: './expander-page.component.html',
  styleUrls: ['./expander-page.component.scss']
})
export class ExpanderPageComponent implements OnInit {
  expander: any = [
    {
      expanderName: 'devices',
      isExpanded: true,
      panelTitle: 'מכשירים',
      panelDescription: 'Description 1',
      hasChildExpander: true,
      isChildExpanded: true,
      childTitle: 'מכשירים',
      hasFooter: true,
      footerTitle: 'סה"כ'
    },
    {
      expanderName: 'sims',
      isExpanded: false,
      panelTitle: 'סימים',
      panelDescription: 'Description 2',
      hasChildExpander: true,
      isChildExpanded: false,
      childTitle: 'סימים',
      hasFooter: true,
      footerTitle: 'סה"כ'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
