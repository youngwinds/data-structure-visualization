import { useSelector, useDispatch } from 'umi';
import { useCallback, useEffect } from 'react';

import { Button, Progress, Space, Tooltip } from 'antd';
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';

import styles from './index.less';
interface IBacktracking {
  initValue: string;
}

export function Backtracking({ initValue }: IBacktracking) {
  const dispatch = useDispatch();
  const { percent } = useSelector((state: any) => state.backtracking);

  const handleRun = useCallback(() => {
    dispatch({
      type: 'backtracking/run',
      payload: {},
    });
  }, [initValue]);

  const handleBackward = useCallback(() => {
    dispatch({
      type: 'backtracking/backward',
    });
  }, [initValue]);

  const handleForward = useCallback(() => {
    dispatch({
      type: 'backtracking/forward',
    });
  }, [initValue]);

  useEffect(() => {
    return () => {
      dispatch({
        type: 'backtracking/destroy',
      });
    };
  }, [initValue]);

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
