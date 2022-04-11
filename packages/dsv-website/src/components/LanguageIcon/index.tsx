import { getLocale, setLocale, useIntl } from 'umi';

import { Menu, Dropdown, Space } from 'antd';

import { ReactComponent as Icon } from '@dsv-website/assets/icons/language.svg';

export function LocaleIcon() {
  const handleLocaleChange = ({ key }: any) => {
    setLocale(key, true);
  };
  const intl = useIntl();

  return (
    <Dropdown
      placement="bottom"
      arrow
      overlay={
        <Menu selectedKeys={[getLocale()]} onClick={handleLocaleChange}>
          <Menu.Item key="zh-CN">中文简体</Menu.Item>
          <Menu.Item key="en-US">English</Menu.Item>
        </Menu>
      }
    >
      <Space>
        <Icon style={{ position: 'relative', top: '5px' }} />
        {intl.formatMessage({ id: 'Languages' })}
      </Space>
    </Dropdown>
  );
}
