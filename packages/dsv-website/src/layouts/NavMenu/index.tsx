import { Link, useIntl } from 'umi';
import { Menu } from 'antd';

export function NavMenu() {
  const intl = useIntl();

  return (
    <Menu mode="horizontal" defaultSelectedKeys={['Home']}>
      <Menu.Item key="Home">
        <Link to="home">
          {intl.formatMessage({
            id: 'home',
          })}
        </Link>
      </Menu.Item>
      <Menu.Item key="About">
        <Link to="about">
          {intl.formatMessage({
            id: 'about',
          })}
        </Link>
      </Menu.Item>
    </Menu>
  );
}
