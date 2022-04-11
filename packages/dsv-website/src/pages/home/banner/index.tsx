import { Typography, Button, Space, Divider } from 'antd';
import { Link, useIntl } from 'umi';

const { Title, Text } = Typography;

export function Banner() {
  const intl = useIntl();

  return (
    <>
      <Title level={1}>
        {intl.formatMessage({
          id: 'Title',
        })}
      </Title>
      <Text italic>
        {intl.formatMessage({
          id: 'Subtitle',
        })}
      </Text>

      <Divider />

      <Space size="large">
        <Link to={'/data-structure'}>
          <Button type="primary" ghost size="large" shape="round">
            {intl.formatMessage({
              id: 'DataStructure',
            })}
          </Button>
        </Link>

        <Link to={'/gallery'}>
          <Button type="primary" ghost size="large" shape="round">
            {intl.formatMessage({
              id: 'Gallery',
            })}
          </Button>
        </Link>
      </Space>
    </>
  );
}
