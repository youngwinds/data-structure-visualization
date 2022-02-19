interface IMenuItem {
  key: string;
  locale: string;
  path?: string;
  children?: Array<IMenuItem>;
}

type IMenu = Array<IMenuItem>;

export { IMenu, IMenuItem };
