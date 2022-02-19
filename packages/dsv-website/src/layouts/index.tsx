import { IRouteComponentProps } from 'umi';

import { Layout, Row, Col } from 'antd';

import styles from './index.less';
import { LocaleIcon } from '../components/LanguageIcon';
import { NavMenu } from '../components/NavMenu';

const { Header, Content, Footer } = Layout;

export default function GlobalLayout({ children }: IRouteComponentProps) {
  return (
    <Layout>
      <Header className={styles.header}>
        <Row style={{ height: '100%' }}>
          <Col span={20}>
            <NavMenu />
          </Col>
          <Col span={4}>
            <LocaleIcon />
          </Col>
        </Row>
      </Header>
      <Content>
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center', height: '48px' }}>
        youngwind.top ©2022 Created
      </Footer>
    </Layout>
  );
}
