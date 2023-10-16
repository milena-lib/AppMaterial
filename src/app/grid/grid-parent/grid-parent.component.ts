import { Component, OnInit } from '@angular/core';
import { ICustomGridModel } from '../i-custom-grid-model';
import { IColumn } from '../i-column';
import { GridColumnTypeEnum } from '../enums';

@Component({
  selector: 'app-grid-parent',
  templateUrl: './grid-parent.component.html',
  styleUrls: ['./grid-parent.component.scss']
})
export class GridParentComponent implements OnInit {
  displayedColumns: IColumn[] = [
    { headerText: 'First Name', dataField: 'fname', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'Last Name', dataField: 'lname', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'id', dataField: 'uid', dataType: GridColumnTypeEnum.link, cssClass: '' },
    { headerText: 'test 1', dataField: 'test1', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'test 2', dataField: 'test2', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'phone', dataField: 'phone', dataType: GridColumnTypeEnum.text, cssClass: '' },
    // { headerText: '', dataField: 'phone', dataType: GridColumnTypeEnum.text, cssClass: '' },
    // { headerText: '', dataField: 'expandedDetail', dataType: GridColumnTypeEnum.icon, cssClass: '' }
  ]

  dataGrid: ICustomGridModel = 
    {
      dataSource: [
        {fname: 'Milena', lname: 'Liberman', uid: '123456789', test1: '1', test2: '10', phone: '0544447775'},
        {fname: 'Ayellet', lname: 'Kosto', uid: '234567890', test1: '2', test2: '20', phone: '0528899666'},
        {fname: 'Ester', lname: 'Laychter', uid: '345678901', test1: '3', test2: '30', phone: '0509966332'},
        {fname: 'Meir', lname: 'Gabay', uid: '456789012', test1: '4', test2: '40', phone: '0526633552'},
        {fname: 'Offer', lname: 'Brown', uid: '567890123', test1: '5', test2: '50', phone: '0548855221'},
        {fname: 'Haya', lname: 'Yoseffi', uid: '678901234', test1: '6', test2: '60', phone: '0548794562'},
        {fname: 'Joshua', lname: 'Goldman', uid: '789012345', test1: '7', test2: '70', phone: '0508899774'},
        {fname: 'Shira', lname: 'Hachmon', uid: '890123456', test1: '8', test2: '80', phone: '0528899562'}        
      ],
      columns: this.displayedColumns
    };

    // expandColumns: Array<string> = ['fname','lname','expand','uid','phone'];

  constructor() { }

  ngOnInit(): void {
    // const displayedColumns = this.dataGrid.columns.map(item => item.dataField)
    // this.expandColumns = ['expand', ...displayedColumns ];     
  }

}
