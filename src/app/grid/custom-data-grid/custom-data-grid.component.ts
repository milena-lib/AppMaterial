import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { IColumn } from '../i-column';
import { ICustomGridModel } from '../i-custom-grid-model';
import { GridColumnTypeEnum } from '../enums';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-custom-data-grid',
  templateUrl: './custom-data-grid.component.html',
  styleUrls: ['./custom-data-grid.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CustomDataGridComponent implements OnInit {
  GridColumnTypeEnum = GridColumnTypeEnum;
  
  _dataGrid: ICustomGridModel;
  get dataGrid(): ICustomGridModel {
    return this._dataGrid;
  }
  @Input() set dataGrid(value: ICustomGridModel) {
      this._dataGrid = value;
      // debugger;
  }

  @Input() showExpandbleRow = false;

  @Input() public expandedRowTemplate!: TemplateRef<any>;

  // @Input() dataGridPrev: ICustomGridModel;

  columns: IColumn[];
  displayedColumns: Array<string>;
  columnsToDisplayWithExpand: Array<string>; 
  
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  expandedElement: ICustomGridModel | null;

  dataSourcePrev: Array<any>;

  constructor(private helper: HelperService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataGrid.dataSource);
    this.columns = this.dataGrid.columns;    

    this.displayedColumns = this.dataGrid.columns.map(item => item.dataField)
    this.columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
    // debugger;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  saveChangedElement() {
    debugger;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openLink(row, column) {
    console.log(row[column.dataField]);
    debugger;
    this.helper.setGridEvent(row, column, "qwerty");
  }

  onClickButton() {
    const ds = this.dataSource.sortData(this.dataSource.filteredData,this.dataSource.sort);
    console.log("sortable data: ", ds);
  }

  trackByMethod(index: number, item: any) {
    console.log("item: ", item);
  }

  isCellChanged(row, column) : boolean{
    let res =  false;
    if(this.dataSourcePrev){
      const rowIndex = this.dataSource.filteredData.indexOf(row);
      const rowPrev = this.dataSourcePrev[rowIndex];
      const valuePrev = rowPrev[column.dataField]  ;
      if (column.dataField == "weight" && rowIndex == 0){

        // console.log("isCellChanged: valueCurrent ", row[column.dataField]);
        // console.log("isCellChanged: valuePrev ", valuePrev);
        // // console.log("isCellChanged: rowPrev ", rowPrev);
          // console.log("========================")

      }
      res = row[column.dataField] != valuePrev;
    }
    return res;

  }
}

// export interface PeriodicElement {
//   position: number;
//   name: string;
//   weight: number;
//   symbol: string;
// }

