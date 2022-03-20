import { runCode } from '@dsv-website/utils/run-code';

interface IBacktrackingState {
  percent: number;
}

export default {
  // models命名空间，需全局唯一
  namespace: 'backtracking',
  // models存储的数据store
  state: {
    percent: 10,
  },
  effects: {
    *run(action, { select }) {
      const { editor } = yield select((store) => store.monaco);
      runCode(editor.getValue());
    },
  },
  // 更新store，用新数据合并state的旧数据
  reducers: {
    backward() {},
    forward() {},
  },
};
