import { Component, Input, OnInit } from '@angular/core';
import { ICustomGridModel } from '../i-custom-grid-model';
import { IColumn } from '../i-column';
import { GridColumnTypeEnum } from '../enums';

@Component({
  selector: 'app-grid-child',
  templateUrl: './grid-child.component.html',
  styleUrls: ['./grid-child.component.scss']
})
export class GridChildComponent implements OnInit {

  @Input() user: any;

  displayedColumns: IColumn[] = [
    { headerText: 'Name', dataField: 'name', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'gender', dataField: 'gender', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'age', dataField: 'age', dataType: GridColumnTypeEnum.link, cssClass: '' },
  ]

  dataGrid: ICustomGridModel = 
    {
      dataSource: [
        {name: 'child 1', gender: 'male', age: '10'},
        {name: 'child 2', gender: 'female', age: '8'}
      ],
      columns: this.displayedColumns
    };

  expandColumns: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    // const displayedColumns = this.dataGrid.columns.map(item => item.dataField)
    // this.expandColumns = ['expand', ...displayedColumns ];
  }

}
