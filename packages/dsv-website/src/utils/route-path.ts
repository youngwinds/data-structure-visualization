import { IMenu, IMenuItem } from '@dsv-website/typings/IMenu';

const pathGenerator = (menu: IMenu, root = '/') => {
  return menu.map((menuItem: IMenuItem) => {
    const item = { ...menuItem };
    if (item.path === undefined) {
      item.path = root + item.key;
    }
    if (item.children !== undefined) {
      item.children = pathGenerator(item.children, item.path + '_');
    }
    return item;
  });
};

export { pathGenerator };
