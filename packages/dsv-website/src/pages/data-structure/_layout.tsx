import { IRouteComponentProps } from 'umi';
import { Layout, Row, Col } from 'antd';
import { SiderMenu } from '@dsv-website/components/SiderMenu';
import { DataStructureMenu } from '@dsv-website/assets/routes/data-structure-menu';
const { Content } = Layout;

export default function DataStructure({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <Layout hasSider={true} style={{ minHeight: '100vh' }}>
      <SiderMenu menu={DataStructureMenu} />
      <Layout style={{ padding: '16px' }}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
