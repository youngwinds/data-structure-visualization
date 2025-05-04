import { cloneDeep, merge } from "lodash-es";
import { IAction } from "../../types/action";
import { SchemaAction, Structure } from "schema";

type DSVArrayDataType<T> = {
  key: string;
  value: T;
  state?: Record<string, any>;
};

type DSVArrayContext = {
  currentSchemaAction?: SchemaAction;
};

export class DSVArray<T> {
  private _data: DSVArrayDataType<T>[];
  private _id: string;
  private _actions: IAction[] = [];
  private _structure: Structure;

  private _context: DSVArrayContext = {};

  constructor(data: T[], options: Structure) {
    this._data = DSVArray.arrayToData<T>(data);
    const { id } = options;
    this._id = id;

    this._structure = merge(
      {},
      {
        type: "VChart",
        id: id,
      },
      options
    );
  }

  get(index: number) {
    this.highlight(index);
    this.unhighlight(index);
  }

  set(index: number, value: T) {
    const id = this._id;
    this._data[index].value = value;

    this._actions.push({
      type: "update",
      structureId: id,
      payload: {
        values: cloneDeep(this._data),
      },
    });

    return this;
  }

  reverse() {
    this._data = this._data.reverse();
    const id = this._id;
    const payload = {
      values: cloneDeep(this._data),
    };

    this._actions.push({
      structureId: id,
      type: "update",
      payload,
    });

    return this;
  }

  appear() {
    this._actions.push({
      structureId: this._id,
      type: "appear",
    });
  }

  swap(index1: number, index2: number) {
    const id = this._id;

    const tempValue = this._data[index1].value;
    this._data[index1].value = this._data[index2].value;
    this._data[index2].value = tempValue;

    const tempKey = this._data[index1].key;
    this._data[index1].key = this._data[index2].key;
    this._data[index2].key = tempKey;

    this._actions.push({
      structureId: id,
      type: "update",
      payload: {
        values: cloneDeep(this._data),
      },
    });
  }

  concat(array: T[]) {
    this._data = this._data.concat(DSVArray.arrayToData<T>(array));
    const id = this._id;
    this._actions.push({
      structureId: id,
      type: "update",
      payload: {
        values: cloneDeep(this._data),
      },
    });
    return this;
  }

  compare(i: number, j: number, fn: (a: T, b: T) => boolean) {
    this.highlight(i);
    this.highlight(j);
  }

  highlight(index: number | [number, number]) {
    if (Array.isArray(index)) {
      const left = index[0];
      const right = index[1];
      for (let i = left; i < right; i++) {
        const state = this._data[i].state;
        if (state) {
          state.fill = "red";
        }
      }
    } else {
      if (this._data[index].state) {
        this._data[index].state.fill = "red";
      }
    }

    this._actions.push({
      structureId: this._id,
      type: "update",
      payload: {
        values: cloneDeep(this._data),
      },
    });
  }

  unhighlight(index: number | [number, number]) {
    if (Array.isArray(index)) {
      const left = index[0];
      const right = index[1];
      for (let i = left; i < right; i++) {
        const state = this._data[i].state;
        if (state) {
          state.fill = "#3063F6";
        }
      }
    } else {
      if (this._data[index].state) {
        this._data[index].state.fill = "#3063F6";
      }
    }

    this._actions.push({
      type: "update",
      structureId: this._id,
      payload: {
        values: cloneDeep(this._data),
      },
    });
  }

  get actions() {
    return this._actions;
  }

  get structure() {
    return this._structure;
  }

  get id() {
    return this._id;
  }

  get context() {
    return {};
  }

  set context(context: Partial<DSVArrayContext>) {
    this._context = {
      ...this._context,
      ...context,
    };
  }
  static arrayToData<T>(data: T[]): DSVArrayDataType<T>[] {
    const result = data;
    return result.map((value, index) => {
      return {
        key: `${value}-${index}`,
        value: value,
        state: {
          fill: "#3063F6",
        },
      };
    });
  }
}
