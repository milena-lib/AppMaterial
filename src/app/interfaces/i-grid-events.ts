import { IColumn } from "../grid/i-column";

export interface IGridEvents {
    row: any;
    column: IColumn;
    component: string;
}
