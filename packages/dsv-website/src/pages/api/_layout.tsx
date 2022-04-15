import { IRouteComponentProps } from 'umi';
import { Layout } from 'antd';
import { SiderMenu } from '@dsv-website/components/SiderMenu';
import { apiMenu } from '@dsv-website/routes/api';
const { Content } = Layout;

export default function DataStructure({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <Layout hasSider={true} style={{ minHeight: 'calc(100vh - 64px - 48px)' }}>
      <SiderMenu menu={apiMenu} />
      <Layout style={{ padding: '16px' }}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
