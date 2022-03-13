import { useDispatch } from 'umi';
import { Button } from 'antd';

export function ToolBar() {
  const dispatch = useDispatch();

  const handlerRun = () => {
    dispatch({
      type: 'monaco/runCode',
      payload: {},
    });
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Button onClick={handlerRun}>Run</Button>
    </div>
  );
}
