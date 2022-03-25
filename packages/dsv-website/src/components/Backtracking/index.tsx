import { useSelector, useDispatch, useIntl } from 'umi';
import { useCallback, useEffect } from 'react';

import { Button, Progress, Space, Tooltip } from 'antd';
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  SettingOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';

import styles from './index.less';
interface IBacktracking {
  initValue: string;
}

export function Backtracking({ initValue }: IBacktracking) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const {
    percent,
    progressFormat,
    disableForward,
    disableBackward,
    disablePlay,
    disableBuild,
  } = useSelector((state: any) => state.backtracking);

  const handleBuild = useCallback(() => {
    dispatch({
      type: 'backtracking/build',
      payload: {},
    });
  }, [initValue]);

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
      <Tooltip
        placement="top"
        overlay={intl.formatMessage({
          id: 'Build',
        })}
      >
        <Button
          disabled={disableBuild}
          icon={<SettingOutlined />}
          onClick={handleBuild}
        />
      </Tooltip>

      <Tooltip
        placement="top"
        overlay={intl.formatMessage({
          id: 'Run',
        })}
      >
        <Button
          disabled={disablePlay}
          icon={<PlayCircleOutlined />}
          onClick={handleRun}
        />
      </Tooltip>

      <Tooltip
        placement="top"
        overlay={intl.formatMessage({
          id: 'Backward',
        })}
      >
        <Button
          disabled={disableBackward}
          icon={<StepBackwardOutlined />}
          onClick={handleBackward}
        />
      </Tooltip>

      <Tooltip
        placement="top"
        overlay={intl.formatMessage({
          id: 'Forward',
        })}
      >
        <Button
          disabled={disableForward}
          icon={<StepForwardOutlined />}
          onClick={handleForward}
        />
      </Tooltip>

      <div style={{ width: 170 }}>
        <Progress percent={percent} format={() => progressFormat} />
      </div>
    </Space>
  );
}
