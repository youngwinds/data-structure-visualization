import { IRouteComponentProps } from 'umi';
import { Layout } from 'antd';
import { SiderMenu } from '@dsv-website/components/SiderMenu';
import { galleryMenu } from '@dsv-website/routes/gallery';
const { Content } = Layout;

export default function DataStructure({ children }: IRouteComponentProps) {
  return (
    <Layout hasSider={true} style={{ minHeight: 'calc(100vh - 64px - 48px)' }}>
      <SiderMenu menu={galleryMenu} />
      <Layout style={{ padding: '16px' }}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
