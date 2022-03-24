import { IRouteComponentProps } from 'umi';
import { Chart } from '@dsv-website/components/Chart';
import { CodeEditor } from '@dsv-website/components/CodeEditor';
import { Backtracking } from '@dsv-website/components/Backtracking';

import styles from './index.less';

export default function Detail(props: IRouteComponentProps) {
  const pathName = props.location.pathname.replace('_', '/');
  const code = require(`../../../config${pathName}`).code;

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
          <div className={styles.backtracking}>
            <Backtracking initValue={code} />
          </div>
          <div className={styles.editor}>
            <CodeEditor initValue={code} />
          </div>
        </div>
      </div>
    </div>
  );
}
