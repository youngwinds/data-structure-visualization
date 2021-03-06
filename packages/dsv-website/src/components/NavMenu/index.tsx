import { Link, useIntl } from 'umi';
import { Menu } from 'antd';
import { navMenu } from '../../routes/nav-menu';
import { pathGenerator } from '@dsv-website/utils/route-path';
import { useEffect, useMemo } from 'react';

export function NavMenu() {
  const intl = useIntl();
  const menu = useMemo(() => {
    return pathGenerator(navMenu, '/');
  }, []);

  useEffect(() => {}, []);

  return (
    <Menu mode="horizontal" defaultSelectedKeys={['Home']}>
      {menu.map(({ locale, path }) => (
        <Menu.Item key={path}>
          <Link to={path}>
            {intl.formatMessage({
              id: locale,
            })}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}
