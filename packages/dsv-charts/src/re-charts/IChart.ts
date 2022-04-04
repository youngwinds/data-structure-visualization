// interface ILifeCircle {
//   chartDidChartInit(): void;
//   chartDidDataChanged(): void;
//   chartWillDataChanged(): void;
//   chartWillDestroyed(): void;
//   chartDidDestroyed(): void;
// }

export interface IChart<DataType, ConfigType, ThemeType> {
  dom: HTMLElement;
  selector: string | HTMLElement;
  config: any;
  theme: any;

  // selector getters
  getSelector(): string | HTMLElement;
  getDom(): HTMLElement;

  // data setters and getters
  setData(data: DataType): this;
  getData(): DataType;

  // config setters and getters
  setConfig(config: ConfigType): this;
  getConfig(): ConfigType;

  // theme setters and getters
  setTheme(theme: ThemeType): this;
  getTheme(): ThemeType;

  // config getters by key
  getConfigByKey(configKey: keyof ConfigType);

  // theme getters by key
  getThemeByKey(themeKey: keyof ThemeType);

  // destory
  destory(): void;
}
