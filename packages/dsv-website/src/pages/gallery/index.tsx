import { useIntl } from 'umi';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Page() {
  const intl = useIntl();
  return (
    <div>
      <Title level={4}>
        {intl.formatMessage({
          id: 'Precautions',
        })}
      </Title>
      <Paragraph>
        {intl.formatMessage({
          id: 'PrecautionsContent',
        })}
      </Paragraph>
    </div>
  );
}
