import { IColumn } from "./i-column";

export interface ICustomGridModel {
    dataSource: Array<any>;
    columns: Array<IColumn>;
}
