import {
  MatrixChart,
  MatrixDataType,
  MatrixItemType,
} from '@dsv-charts/charts';
import { UniqueKey } from '@dsv-charts/utils';

import { merge } from 'lodash';
import { DsMatrixConfigType, DsMatrixThemeType } from './type';

class DsMatrixItem {
  private _key: string;
  private _name: string;
  private _state: string;
  private _rowIndex: number;
  private _colIndex: number;
  private _value: string | number;

  constructor(props: MatrixItemType) {
    this._key = UniqueKey.generate();
    this._state = props.state;
    this._value = props.value;
    this._rowIndex = props.rowIndex ?? 0;
    this._colIndex = props.colIndex ?? 0;
    this._name = props.name ?? String(this._value);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get rowIndex() {
    return this._rowIndex;
  }

  set rowIndex(rowIndex) {
    this._rowIndex = rowIndex;
  }

  get colIndex() {
    return this._colIndex;
  }

  set cowIndex(cowIndex) {
    this._colIndex = cowIndex;
  }

  get key() {
    return this._key;
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
      merge({}, customConfig, {
        data: DsMatrix.convertDataToChartData(customConfig.data),
      }),
      merge({}, customTheme)
    );

    super.render();
  }

  createMatrix(data: (string | number)[][]) {
    this.dsData = DsMatrix.convertDataToDsData(data);

    this.setData();
  }

  setData() {
    const chartData = DsMatrix.convertDsDataToChartData(this.dsData);
    super.setData(chartData);
    return this;
  }

  static convertDsDataToChartData(dsData): MatrixDataType {
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

  static convertDataToDsData(data: (string | number)[][]) {
    const dsData: DsMatrixItem[][] = [];
    for (let i = 0; i < data.length; i++) {
      const dsRow: DsMatrixItem[] = [];
      for (let j = 0; j < data[i].length; j++) {
        const item = new DsMatrixItem({
          key: undefined,
          name: String(data[i][j]),
          value: data[i][j],
          state: undefined,
          rowIndex: i,
          colIndex: j,
        });
        dsRow.push(item);
      }
      dsData.push(dsRow);
    }
    return dsData;
  }

  static convertDataToChartData(data: (string | number)[][]) {
    const dsData = DsMatrix.convertDataToDsData(data);
    const chartData = DsMatrix.convertDsDataToChartData(dsData);
    return chartData;
  }
}

export { DsMatrix, DsMatrixConfigType, DsMatrixThemeType };
