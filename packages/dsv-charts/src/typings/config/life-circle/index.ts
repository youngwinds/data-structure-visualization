export interface ILifeCircle {
  beforeInit?: (...args) => void;
  afterInit?: (...args) => void;
  brforeSetData?: (...args) => void;
  afterSetData?: (...args) => void;
}

export type ILifeCircleKeys = keyof ILifeCircle;
