import { IRouteComponentProps } from 'umi';
import { Chart } from '@dsv-website/components/Chart';
import { CodeEditor } from '@dsv-website/components/CodeEditor';
import { Backtracking } from '@dsv-website/components/Backtracking';
import { DocView } from '@dsv-website/components/DocView';

import styles from './index.less';

export default function Detail(props: IRouteComponentProps) {
  const pathName = props.location.pathname.replace('_', '/');
  const path = require(`../../../config${pathName}`).path;

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.doc}>
            <DocView path={path} />
          </div>
          <div className={styles.chart}>
            <Chart />
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.backtracking}>
            <Backtracking path={path} />
          </div>
          <div className={styles.editor}>
            <CodeEditor path={path} />
          </div>
        </div>
      </div>
    </div>
  );
}

