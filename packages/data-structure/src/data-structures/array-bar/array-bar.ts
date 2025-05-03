import {
  IActions,
  IActionSpec,
  ICharacterConfig,
  IStoryDSL,
} from "@visactor/vstory";
import { cloneDeep, merge } from "lodash-es";
interface ArrayBarOptions {
  id: string;
  interval?: number;
  structure?: Partial<ICharacterConfig>;
}

type ArrayBarDataType<T> = {
  key: string;
  value: T;
  state?: Record<string, any>;
};

export class ArrayBar<T> {
  private _data: ArrayBarDataType<T>[];
  private _id: string;
  private _dataId: string;
  private _interval: number;

  private _actions: IActions[] = [];
  private _structure: ICharacterConfig;

  constructor(data: T[], options: ArrayBarOptions) {
    this._data = this.arrayToData(data);
    const { id, interval = 1000 } = options;
    this._id = id;
    this._dataId = `array-bar-${id}`;
    this._interval = interval;

    this._structure = merge(
      {},
      {
        id: id,
        type: "VChart",
        zIndex: 1,
        position: {
          top: 0,
          left: 0,
          width: 960,
          height: 600,
        },
        options: {
          // 图表的背景板配置
          panel: {
            fill: "#ffffff",
            shadowColor: "rgba(0, 0, 0, 0.05)",
            shadowBlur: 10,
            shadowOffsetX: 4,
            shadowOffsetY: 4,
            cornerRadius: 8,
          },
          spec: {
            data: [
              {
                id: this._dataId,
                values: this._data,
              },
            ],
            dataKey: "key",
            axes: [
              {
                orient: "bottom",
                type: "band",
                label: {
                  visible: false,
                },
              },
              {
                orient: "left",
                type: "linear",
                visible: true,
                zero: true,
                max: Math.max(...this._data.map((d) => d.value as number)),
                nice: true,
              },
            ],
            bar: {
              style: {
                fill: (d: any) => d.state.fill,
              },
            },
            type: "bar",
            xField: "key",
            yField: "value",
            label: {
              visible: true,
              smartInvert: true,
              offset: -20,
              position: "inside-bottom",
              overlap: {
                clampForce: false,
              },
              style: {
                fontSize: 14,
                fill: (d: any) => d.state.fill,
              },
            },
          },
        },
      },
      options.structure
    );
  }

  arrayToData(data: T[]): ArrayBarDataType<T>[] {
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

  reverse() {
    this._data = this._data.reverse();
    const id = this._id;
    const dataId = this._dataId;
    const interval = this._interval;
    const length = this._actions.length;
    const action = {
      action: "update",
      startTime: interval * length,
      payload: {
        id: dataId,
        animation: {
          duration: interval,
        },
        values: cloneDeep(this._data),
      },
    };
    this._actions.push({
      characterId: id,
      characterActions: [action],
    });
    return this;
  }

  appear() {
    this._actions.push({
      characterId: this._id,
      characterActions: [
        {
          action: "appear",
          startTime: 0,
          payload: {
            animation: {
              duration: this._interval,
            },
          },
        },
      ],
    });
  }

  set(index: number, value: T) {
    const id = this._id;
    const dataId = this._dataId;
    const interval = this._interval;
    const length = this._actions.length;

    this._data[index].value = value;

    const action = {
      action: "update",
      startTime: interval * length,
      payload: {
        id: dataId,
        animation: {
          duration: interval,
        },
        values: cloneDeep(this._data),
      },
    } as IActionSpec;

    this._actions.push({
      characterId: id,
      characterActions: [action],
    });

    return this;
  }

  get(index: number) {
    this.highlight(index);
    this.unhighlight(index);
  }

  swap(index1: number, index2: number) {
    const id = this._id;
    const dataId = this._dataId;
    const interval = this._interval;
    const length = this._actions.length;

    const tempValue = this._data[index1].value;
    this._data[index1].value = this._data[index2].value;
    this._data[index2].value = tempValue;

    const tempKey = this._data[index1].key;
    this._data[index1].key = this._data[index2].key;
    this._data[index2].key = tempKey;

    const action = {
      action: "update",
      startTime: interval * length,
      payload: {
        id: dataId,
        animation: {
          duration: interval,
        },
        values: cloneDeep(this._data),
      },
    };
    this._actions.push({
      characterId: id,
      characterActions: [action],
    });
  }

  concat(array: T[]) {
    this._data = this._data.concat(this.arrayToData(array));
    const id = this._id;
    const dataId = this._dataId;
    const interval = this._interval;
    const length = this._actions.length;

    const action = {
      action: "update",
      startTime: interval * length,
      payload: {
        id: dataId,
        values: cloneDeep(this._data),
      },
    } as IActionSpec;

    this._actions.push({
      characterId: id,
      characterActions: [action],
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

    const dataId = this._dataId;
    const interval = this._interval;
    const action = {
      action: "update",
      startTime: this._interval * this._actions.length,
      payload: {
        id: dataId,
        animation: {
          duration: interval,
        },
        values: cloneDeep(this._data),
      },
    } as IActionSpec;

    this._actions.push({
      characterId: this._id,
      characterActions: [action],
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

    const dataId = this._dataId;
    const interval = this._interval;

    const action = {
      action: "update",
      startTime: this._interval * this._actions.length,
      payload: {
        id: dataId,
        animation: {
          duration: interval,
        },
        values: cloneDeep(this._data),
      },
    } as IActionSpec;
    this._actions.push({
      characterId: this._id,
      characterActions: [action],
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
}
