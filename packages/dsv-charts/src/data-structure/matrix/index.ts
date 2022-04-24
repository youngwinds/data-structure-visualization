import {
  MatrixChart,
  MatrixDataType,
  MatrixItemType,
} from '@dsv-charts/charts';
import { UniqueKey } from '@dsv-charts/utils';

import { merge } from 'lodash';
import { DsMatrixConfigType, DsMatrixThemeType } from './type';

interface IDsMatrixItemOptions {
  updateHandler: Function;
}

class DsMatrixItem {
  private _key: string;
  private _name: string;
  private _state: string;
  private _rowIndex: number;
  private _colIndex: number;
  private _value: string | number;

  private _updateHandler: Function;

  constructor(props: MatrixItemType, options: IDsMatrixItemOptions) {
    this._key = UniqueKey.generate();
    this._state = props.state;
    this._value = props.value;
    this._rowIndex = props.rowIndex ?? 0;
    this._colIndex = props.colIndex ?? 0;
    this._name = props.name ?? String(this._value);

    this._updateHandler = options.updateHandler ?? null;
  }

  public update() {
    if (this._updateHandler) {
      this._updateHandler();
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;

    this.update();
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
    this.update();
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this._name = String(value);
    this.update();
  }

  get rowIndex() {
    return this._rowIndex;
  }

  set rowIndex(rowIndex) {
    throw new Error('Not writable: rowIndex');
  }

  get colIndex() {
    return this._colIndex;
  }

  set colIndex(colIndex) {
    throw new Error('Not writable: colIndex');
  }

  get key() {
    return this._key;
  }

  set key(key) {
    throw new Error('Not writable: key');
  }

  setState(state) {
    this._state = state;
  }

  setValue(value) {
    this._value = value;
  }

  setName(name) {
    this._name = name;
  }

  setRowIndex(rowIndex) {
    this._rowIndex = rowIndex;
  }

  setColIndex(colIndex) {
    this._colIndex = colIndex;
  }

  setKey(key) {
    this._key = key;
  }
}

class DsMatrix extends MatrixChart {
  private dsData: DsMatrixItem[][] = [];

  constructor(
    customConfig: DsMatrixConfigType,
    customTheme: DsMatrixThemeType
  ) {
    super(
      'container',
      merge({}, customConfig, { data: [[]] }),
      merge({}, customTheme)
    );

    super.render();
  }

  public getItem(rowIndex: number, colIndex: number) {
    return this.dsData[rowIndex][colIndex];
  }

  public getRow(rowIndex: number) {
    return this.dsData[rowIndex];
  }

  public swap(
    rowIndex1: number,
    colIndex1: number,
    rowIndex2: number,
    colIndex2: number
  ) {
    const item1 = this.dsData[rowIndex1][colIndex1];
    const item2 = this.dsData[rowIndex2][colIndex2];

    // 交换元素整体位置
    this.dsData[rowIndex1].splice(colIndex1, 1, item2);
    this.dsData[rowIndex2].splice(colIndex2, 1, item1);
    // 修改下标值
    item1.setRowIndex(rowIndex2);
    item1.setColIndex(colIndex2);

    item2.setRowIndex(rowIndex1);
    item2.setColIndex(colIndex1);

    this.setData();
  }

  public createMatrix(data: (string | number)[][]) {
    this.dsData = this.convertDataToDsData(data);

    this.setData();
  }

  public setData() {
    const chartData = this.convertDsDataToChartData(this.dsData);
    super.setData(chartData);
    return this;
  }

  private convertDsDataToChartData(dsData): MatrixDataType {
    const result: MatrixDataType = [];

    for (let i = 0; i < dsData.length; i++) {
      const rowData = [];
      for (let j = 0; j < dsData[i].length; j++) {
        rowData.push({
          key: dsData[i][j].key,
          name: dsData[i][j].name,
          state: dsData[i][j].state,
          value: dsData[i][j].value,
          rowIndex: dsData[i][j].rowIndex,
          colIndex: dsData[i][j].colIndex,
        });
      }
      result.push(rowData);
    }

    return result;
  }

  private convertDataToDsData(data: (string | number)[][]) {
    const dsData: DsMatrixItem[][] = [];
    for (let i = 0; i < data.length; i++) {
      const dsRow: DsMatrixItem[] = [];
      for (let j = 0; j < data[i].length; j++) {
        const item = new DsMatrixItem(
          {
            key: undefined,
            name: String(data[i][j]),
            value: data[i][j],
            state: undefined,
            rowIndex: i,
            colIndex: j,
          },
          {
            updateHandler: () => {
              this.setData();
            },
          }
        );
        dsRow.push(item);
      }
      dsData.push(dsRow);
    }
    return dsData;
  }

  private convertDataToChartData(data: (string | number)[][]): MatrixDataType {
    const dsData = this.convertDataToDsData(data);
    const chartData = this.convertDsDataToChartData(dsData);
    return chartData;
  }

  static convertDataToChartData(data: (string | number)[][]): MatrixDataType {
    const chartData: MatrixItemType[][] = [];
    for (let i = 0; i < data.length; i++) {
      const rowData: MatrixItemType[] = [];
      for (let j = 0; j < data[i].length; j++) {
        const item = {
          key: UniqueKey.generate(),
          name: String(data[i][j]),
          value: data[i][j],
          state: undefined,
          rowIndex: i,
          colIndex: j,
        };
        rowData.push(item);
      }
      chartData.push(rowData);
    }
    return chartData;
  }
}

export { DsMatrix, DsMatrixConfigType, DsMatrixThemeType };
