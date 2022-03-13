import { CodeEditor } from './CodeEditor';
import { ToolBar } from './ToolBar';

import styles from './index.less';
interface IEditor {
  initValue: string;
}

export function Editor({ initValue }: IEditor) {
  return (
    <div className={styles.container}>
      <div className={styles.toolBar}>
        <ToolBar />
      </div>
      <div className={styles.codeEditor}>
        <CodeEditor initValue={initValue} />
      </div>
    </div>
  );
}
