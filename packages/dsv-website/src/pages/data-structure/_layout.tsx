import { IRouteComponentProps } from 'umi';
import { Layout } from 'antd';
import { SiderMenu } from '@/components/SiderMenu';
import { DataStructureMenu } from '@/assets/routes/data-structure-menu';
const { Content } = Layout;

export default function DataStructure({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <Layout style={{ minHeight: 'calc(100vh)' }}>
      <SiderMenu menu={DataStructureMenu} />
      <Content style={{ margin: '0 16px' }}>{children}</Content>
    </Layout>
  );
}
