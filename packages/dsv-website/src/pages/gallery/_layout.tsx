import { IRouteComponentProps } from 'umi';
import { Layout } from 'antd';
import { SiderMenu } from '@dsv-website/components/SiderMenu';
import { GalleryMenu } from '@dsv-website/assets/routes/gallery-menu';
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
      <SiderMenu menu={GalleryMenu} />
      <Content style={{ margin: '0 16px' }}>{children}</Content>
    </Layout>
  );
}
