export interface ILayoutConfig {
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export interface IConfig {
  type: 'array' | 'tree' | 'stack' | undefined;
  layout?: ILayoutConfig;
}

export type IConfigKeys = keyof IConfig;
