import { IRouteComponentProps } from 'umi';
import { Layout, Row, Col } from 'antd';
import { SiderMenu } from '@dsv-website/components/SiderMenu';
import { dataStructureMenu } from '@dsv-website/routes/data-structure';
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
      <SiderMenu menu={dataStructureMenu} />
      <Layout style={{ padding: '16px' }}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
