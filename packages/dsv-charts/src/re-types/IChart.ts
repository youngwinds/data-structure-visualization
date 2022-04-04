// interface ILifeCircle {
//   chartDidChartInit(): void;
//   chartDidDataChanged(): void;
//   chartWillDataChanged(): void;
//   chartWillDestroyed(): void;
//   chartDidDestroyed(): void;
// }

export interface IChart {
  selector: string | HTMLElement;
  config: any;
  theme: any;

  render(data): void;
  // selector getters

  getSelector(): HTMLElement;

  // data setters and getters
  setData(data): void;
  getData(data): any;

  // data setters and getters
  setConfig(config): void;
  getConfig(config): any;

  // data setters and getters
  setTheme(theme): void;
  getTheme(theme): any;

  // config getters by key
  getConfigByKey(): any;

  // theme getters by key
  getThemeByKey(): any;

  // destory
  destory(): void;
}
