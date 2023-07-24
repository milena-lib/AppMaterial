import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from '../i-column';
import { ICustomGridModel } from '../i-custom-grid-model';
import { GridColumnTypeEnum } from '../enums';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
  @Input() child: any;

  displayedColumns: IColumn[] = [
    { headerText: 'school name', dataField: 'school', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'school address', dataField: 'schoolAddress', dataType: GridColumnTypeEnum.text, cssClass: '' },
  ]

  dataGrid: ICustomGridModel = 
    {
      dataSource: [
        {school: 'Katzenelson', schoolAddress: 'Katzenelson 25, Givatayim'},
        {school: 'Zvulon Amer', schoolAddress: 'Ha-shalom 10, Tel Aviv'}
      ],
      columns: this.displayedColumns
    };
  constructor() { }

  ngOnInit(): void {
  }

}
