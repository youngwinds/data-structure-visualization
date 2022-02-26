export type TextType = {
  textColor?: string;
};

export interface ITheme {
  colorScheme?: string[];
  text?: TextType;
}

export type IThemeKeys = keyof ITheme;
