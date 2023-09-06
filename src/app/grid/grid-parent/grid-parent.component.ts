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
    { headerText: 'phone', dataField: 'phone', dataType: GridColumnTypeEnum.text, cssClass: '' },
    // { headerText: '', dataField: 'phone', dataType: GridColumnTypeEnum.text, cssClass: '' },
    // { headerText: '', dataField: 'expandedDetail', dataType: GridColumnTypeEnum.icon, cssClass: '' }
  ]

  dataGrid: ICustomGridModel = 
    {
      dataSource: [
        {fname: 'Milena', lname: 'Liberman', uid: '123456789', phone: '0544447775'},
        {fname: 'Ayellet', lname: 'Kosto', uid: '234567890', phone: '0528899666'},
        {fname: 'Ester', lname: 'Laychter', uid: '345678901', phone: '0509966332'},
        {fname: 'Meir', lname: 'Gabay', uid: '456789012', phone: '0526633552'},
        {fname: 'Offer', lname: 'Brown', uid: '567890123', phone: '0548855221'},
        {fname: 'Haya', lname: 'Yoseffi', uid: '678901234', phone: '0548794562'},
        {fname: 'Joshua', lname: 'Goldman', uid: '789012345', phone: '0508899774'},
        {fname: 'Shira', lname: 'Hachmon', uid: '890123456', phone: '0528899562'}        
      ],
      columns: this.displayedColumns
    };

    expandColumns: Array<string> = ['fname','lname','expand','uid','phone'];

  constructor() { }

  ngOnInit(): void {
    // const displayedColumns = this.dataGrid.columns.map(item => item.dataField)
    // this.expandColumns = ['expand', ...displayedColumns ];     
  }

}
