import { IRouteComponentProps } from 'umi';
import { Layout } from 'antd';
import { SiderMenu } from '@dsv-website/components/SiderMenu';
import { galleryMenu } from '@dsv-website/routes/gallery';
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
      <SiderMenu menu={galleryMenu} />
      <Content style={{ margin: '0 16px' }}>{children}</Content>
    </Layout>
  );
}
