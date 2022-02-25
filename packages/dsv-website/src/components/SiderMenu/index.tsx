import { Link, useIntl } from 'umi';
import { useCallback, useMemo, useState } from 'react';
import { Layout, Menu } from 'antd';
import { IMenu, IMenuItem } from '@dsv-website/typings/IMenu';
import { pathGenerator } from '@dsv-website/utils/route-path';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface ISiderMenu {
  menu: IMenu;
}

export function SiderMenu({ menu }: ISiderMenu) {
  const intl = useIntl();

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const menuGenerator = useCallback((menu: IMenu) => {
    return menu.map((item: IMenuItem) => {
      if (item.children !== undefined) {
        return (
          <SubMenu
            key={item.path}
            title={intl.formatMessage({
              id: item.locale,
            })}
          >
            {menuGenerator(item.children)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={item.path}>
          <Link to={item.path}>
            {intl.formatMessage({
              id: item.locale,
            })}
          </Link>
        </Menu.Item>
      );
    });
  }, []);

  const SiderMenu = useMemo(() => {
    const pathMenu = pathGenerator(menu, `/${location.hash.split('/')[1]}/`);

    return menuGenerator(pathMenu);
  }, [menu, window.location.hash]);

  return (
    <Sider
      width={200}
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu theme="light" mode="inline">
        {SiderMenu}
      </Menu>
    </Sider>
  );
}
