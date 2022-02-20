export interface IChart {
  readonly init: () => void;
  readonly render: () => void;
  readonly destroy: () => void;
}
