import { useSelector, useDispatch } from 'umi';
import { useCallback } from 'react';

import { Button, Progress, Space, Tooltip } from 'antd';
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';

import styles from './index.less';
export function Backtracking() {
  const dispatch = useDispatch();
  const { percent } = useSelector((state: any) => state.backtracking);

  const handleRun = useCallback(() => {
    dispatch({
      type: 'backtracking/run',
      payload: {},
    });
  }, []);

  const handleBackward = useCallback(() => {}, []);

  const handleForward = useCallback(() => {}, []);

  return (
    <Space className={styles.backtracking}>
      <Tooltip placement="top" overlay="Run">
        <Button icon={<PlayCircleOutlined />} onClick={handleRun} />
      </Tooltip>

      <div style={{ width: 170 }}>
        <Progress percent={percent} />
      </div>

      <Tooltip placement="top" overlay="Backward">
        <Button icon={<StepBackwardOutlined />} onClick={handleBackward} />
      </Tooltip>

      <Tooltip placement="top" overlay="Forward">
        <Button icon={<StepForwardOutlined />} onClick={handleForward} />
      </Tooltip>
    </Space>
  );
}
