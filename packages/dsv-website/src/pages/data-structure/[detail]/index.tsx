import { IRouteComponentProps } from 'umi';
import { Button } from 'antd';
import { Chart } from '@dsv-website/components/Editor/Chart';
import { Monaco } from '@dsv-website/components/Editor/Monaco';
import { CaretRightOutlined } from '@ant-design/icons';

import styles from './index.less';

export default function Detail(props: IRouteComponentProps) {
  const pathName = props.location.pathname.replace('_', '/');
  const code = require(`../../../assets/config${pathName}`).default.code;

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.left}>
          <Chart />
        </div>
        <div className={styles.middle}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.right}>
          <Monaco value={code} />
        </div>
      </div>
    </div>
  );
}
