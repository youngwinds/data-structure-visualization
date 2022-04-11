import { Link, useIntl } from 'umi';
import { useCallback, useMemo, useState } from 'react';
import { Layout, Menu } from 'antd';
import { IMenu, IMenuItem } from '@dsv-website/typings/IMenu';

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
            key={item.key}
            title={intl.formatMessage({
              id: item.key,
            })}
          >
            {menuGenerator(item.children)}
          </SubMenu>
        );
      }
      console.log();

      return (
        <Menu.Item key={item.key}>
          <Link to={item.path}>
            {intl.formatMessage({
              id:
                location.hash.split('/')[1].replace('-', '_') + '_' + item.key,
            })}
          </Link>
        </Menu.Item>
      );
    });
  }, []);

  const SiderMenu = useMemo(() => {
    return menuGenerator(menu);
  }, [menu, window.location.hash]);

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: 'calc(100vh - 64px - 48px)',
      }}
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
