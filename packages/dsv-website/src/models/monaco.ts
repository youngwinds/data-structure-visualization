import * as monaco from 'monaco-editor';

interface IMonacoState {
  editor: null | monaco.editor.IStandaloneCodeEditor;
}

export default {
  namespace: 'monaco',

  state: {
    editor: null,
  },

  reducers: {
    setEditor(
      state: IMonacoState,
      { payload }: { payload: { editor: monaco.editor.IStandaloneCodeEditor } },
    ) {
      return { ...state, ...payload };
    },
    release(state: IMonacoState) {
      if (state.editor === null) {
        return { ...state };
      }

      state.editor.dispose();
      return {};
    },
  },
};
