import { IRouteComponentProps } from 'umi';

import { Layout, Row, Col, Button, Space, Typography } from 'antd';

import { LocaleIcon } from '@dsv-website/components/LanguageIcon';
import { NavMenu } from '@dsv-website/components/NavMenu';
import { GithubOutlined } from '@ant-design/icons';

import styles from './index.less';
import { useEffect } from 'react';

const { Header, Content, Footer } = Layout;

export default function GlobalLayout({ children }: IRouteComponentProps) {
  return (
    <Layout>
      <Header className={styles.header}>
        <Row style={{ height: '100%' }}>
          <Col sm={12} md={16} lg={18} xl={20}>
            <NavMenu />
          </Col>
          <Col sm={12} md={8} lg={6} xl={4}>
            <Space>
              <LocaleIcon />
              <Typography.Link
                target="_blank"
                href="https://github.com/youngwinds/data-structure-visualization"
              >
                <Button shape="round" icon={<GithubOutlined />}>
                  Github
                </Button>
              </Typography.Link>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content>{children}</Content>
      <Footer className={styles.footer}>
        {`Copyright ©${new Date().getFullYear()} youngwind.top`}
      </Footer>
    </Layout>
  );
}
