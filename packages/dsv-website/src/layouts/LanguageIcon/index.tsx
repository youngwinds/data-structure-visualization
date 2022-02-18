import { getLocale, setLocale } from 'umi';

import { Menu, Dropdown } from 'antd';

import { ReactComponent as Icon } from '../../icons/language.svg';
import { useReducer } from 'react';

export function LocaleIcon() {
  const [count, forceUpdate] = useReducer((v) => v + 1, 0);
  const handleLocaleChange = ({ key }: any) => {
    setLocale(key, false);
    forceUpdate();
  };

  return (
    <Dropdown
      placement="bottomCenter"
      arrow
      overlay={
        <Menu selectedKeys={[getLocale()]} onClick={handleLocaleChange}>
          <Menu.Item key="zh-CN">中文简体</Menu.Item>
          <Menu.Item key="en-US">English</Menu.Item>
        </Menu>
      }
    >
      <Icon />
    </Dropdown>
  );
}
