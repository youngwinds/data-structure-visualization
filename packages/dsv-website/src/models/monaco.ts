import * as monaco from 'monaco-editor';
import { runCode } from '@dsv-website/utils/run-code';

interface IMonacoState {
  editor: null | monaco.editor.IStandaloneCodeEditor;
}

export default {
  // models命名空间，需全局唯一
  namespace: 'monaco',
  // models存储的数据store
  state: {
    editor: null,
  },
  // 更新store，用新数据合并state的旧数据
  reducers: {
    setEditor(
      state: IMonacoState,
      { payload }: { payload: { editor: monaco.editor.IStandaloneCodeEditor } },
    ) {
      return { ...state, ...payload };
    },
    // runCode(state: IMonacoState, { payload }: any) {
    //   if (state.editor === null) {
    //     return { ...state };
    //   }
    //   const code = state.editor.getValue();
    //   runCode(code);
    //   return { ...state };
    // },
    release(state: IMonacoState) {
      if (state.editor === null) {
        return { ...state };
      }

      state.editor.dispose();
      return {};
    },
  },
};
