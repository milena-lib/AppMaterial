import { DataSource } from '@angular/cdk/collections';
import { Component, OnChanges, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { IGridEvents } from '../interfaces/i-grid-events';
import { HelperService } from '../services/helper.service';
import { GridColumnTypeEnum } from './enums';
import { IColumn } from './i-column';
import { ICustomGridModel } from './i-custom-grid-model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})


export class GridComponent implements OnInit {
  
  // ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  
  displayedColumns: IColumn[] = [
    { headerText: 'Position', dataField: 'position', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'Name', dataField: 'name', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'Weight', dataField: 'weight', dataType: GridColumnTypeEnum.text, cssClass: '' },
    { headerText: 'Symbol', dataField: 'symbol', dataType: GridColumnTypeEnum.link, cssClass: '' }
  ]

  dataGrid: ICustomGridModel = 
    {
      dataSource: [
        {position: 1, name: 'Hydrogen', weight: '1.0079', symbol: 'H'},
        {position: 2, name: 'Helium', weight: '4.0026', symbol: 'He'},
        {position: 3, name: 'Lithium', weight: '6.941', symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: '9.0122', symbol: 'Be'},
        {position: 5, name: 'Boron', weight: '10.811', symbol: 'B'},
        {position: 6, name: 'Carbon', weight: '12.0107', symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: '14.0067', symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: '15.9994', symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: '18.9984', symbol: 'F'},
        {position: 10, name: 'Neon', weight: '20.1797', symbol: 'Ne'},
      ],
      columns: this.displayedColumns
    };

  dataGridPrev: ICustomGridModel = 
  {
    dataSource: [
      {position: 1, name: 'Hydrogen', weight: '1.0079', symbol: 'H'},
      {position: 2, name: 'Helium', weight: '4.0026', symbol: 'He'},
      {position: 3, name: 'Lithium', weight: '6.941', symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: '9.0122', symbol: 'Be'},
      {position: 5, name: 'Boron', weight: '10.811', symbol: 'B'},
      {position: 6, name: 'Carbon', weight: '12.0107', symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: '14.0067', symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: '15.9994', symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: '18.9984', symbol: 'F'},
      {position: 10, name: 'Neon', weight: '20.1797', symbol: 'Ne'},
    ],
    columns: this.displayedColumns
  }

  // dataGridPrev: ICustomGridModel = {
  //   dataSource:[]=this.dataGrid.dataSource,
  //   columns: this.displayedColumns
  // }

  constructor(private helper: HelperService) {     
  }

  ngOnInit(): void {
    this.helper.gridEvent$.subscribe((event: IGridEvents) => {
      if(event && event.component === "qwerty"){
        console.log("event: ", event);
      }
    });
    
    interval(30000).subscribe((val) => {
      // this.dataGrid.dataSource[2].weight = this.dataGrid.dataSource[2].weight.replace("<span class='fired'>", "").replace("</span>","");
      let data = this.dataGrid.dataSource.slice();    
      data[0].weight = (Number(this.dataGrid.dataSource[0].weight) + 1).toString();
      
      // console.log("dataGridPrev weight:", this.dataGridPrev.dataSource[0].weight);
      // console.log("dataGrid weight:", this.dataGrid.dataSource[0].weight);
      // for(let i=0; i<this.dataGrid.dataSource.length; i++) {
      //   // if(this.dataGrid.dataSource[i].weight !== this.dataGridPrev.dataSource[i].weight) {
      //   //   this.dataGrid.dataSource[i].weight = `<span class="fired">${this.dataGrid.dataSource[i].weight}</span>`;
      //   // }

      //   this.dataGridPrev.dataSource[i].weight = this.dataGrid.dataSource[i].weight;
      // }

      this.dataGrid = {dataSource: data, columns: this.displayedColumns};
    });
  }

}

// export interface PeriodicElement {
//   position: number;
//   name: string;
//   weight: number;
//   symbol: string;
// }
