import {
  IActions,
  IActionSpec,
  ICharacterConfig,
  IStoryDSL,
} from "@visactor/vstory";

interface ArrayBarOptions {
  id: string;
  interval?: number;
  structure?: Partial<ICharacterConfig>;
}

export class ArrayBar<T> {
  private _data: T[];
  private _id: string;
  private _dataId: string;
  private _interval: number;

  private _actions: IActions[] = [];
  private _structure: ICharacterConfig;

  constructor(data: T[], options: ArrayBarOptions) {
    this._data = data;

    const { id, interval = 1000 } = options;
    this._id = id;
    this._dataId = `array-bar-${id}`;
    this._interval = interval;

    this._structure = Object.assign(
      {},
      {
        id: id,
        type: "VChart",
        zIndex: 1,
        position: {
          top: 200,
          left: 200,
          width: 580,
          height: 190,
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
                values: this._data.map((value, index) => {
                  return {
                    key: `${value}-${index}`,
                    x: `${value}`,
                    y: value,
                  };
                }),
              },
            ],
            dataKey: "key",
            axes: [
              {
                orient: "bottom",
                type: "band",
              },
              {
                orient: "bottom",
                type: "linear",
                visible: false,
              },
            ],
            type: "bar",
            xField: "x",
            yField: "y",
          },
        },
      },
      options.structure
    );
  }

  set(index: number, value: T) {
    const id = this._id;
    const dataId = this._dataId;
    const interval = this._interval;
    const length = this._actions.length;
    const data = this._data;

    this._data[index] = value;

    const action = {
      action: "update",
      startTime: interval * (length + 1),
      payload: {
        id: dataId,
        animation: {
          duration: interval,
        },
        values: data.map((value) => {
          return {
            x: `${value}`,
            y: value,
          };
        }),
      },
    } as IActionSpec;

    this._actions.push({
      characterId: id,
      characterActions: [action],
    });

    return this;
  }

  concat(array: T[]) {
    this._data = this._data.concat(array);
    const id = this._id;
    const dataId = this._dataId;
    const interval = this._interval;
    const length = this._actions.length;

    const action = {
      action: "update",
      startTime: interval * length,
      payload: {
        id: dataId,
        values: this._data.map((value, index) => {
          return {
            x: `${value}`,
            y: value,
          };
        }),
      },
    } as IActionSpec;

    this._actions.push({
      characterId: id,
      characterActions: [action],
    });
    return this;
  }

  get(index: number) {
    const value = this._data[index];
    const action = {
      action: "highlight",
      startTime: this._interval * this._actions.length,
      payload: {
        id: this._dataId,
        value: value,
        animation: {
          duration: 1000,
          easing: "linear",
        },
        style: {
          fill: "red",
        },
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
