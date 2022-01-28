import { GridColumnTypeEnum } from "./enums";

export interface IColumn {
    headerText: string;
    dataField: string;
    dataType: GridColumnTypeEnum;
    cssClass: string;
}
