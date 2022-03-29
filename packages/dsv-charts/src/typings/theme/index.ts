export type TextType = {
  textColor?: string;
};

export type BorderType = {
  color?: string;
  width?: number | string;
};

export interface ITheme {
  colorScheme?: string[];
  text?: TextType;
  border?: BorderType;
}

export type IThemeKeys = keyof ITheme;
