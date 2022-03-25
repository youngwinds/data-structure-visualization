import { useEffect, useRef } from 'react';
import { useDispatch } from 'umi';
import * as monaco from 'monaco-editor';
import { runCode } from '@dsv-website/utils/run-code';
interface ICodeEditor {
  initValue: string;
}

export function CodeEditor({ initValue }: ICodeEditor) {
  const dispatch = useDispatch();
  const refContainer = useRef<HTMLDivElement>(null);
  const refEditor = useRef<monaco.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    if (refContainer.current === null) {
      return () => {};
    }
    const editor = monaco.editor.create(refContainer.current, {
      value: initValue,
      language: 'javascript',
    });

    refEditor.current = editor;

    dispatch({
      type: 'monaco/setEditor',
      payload: {
        editor,
      },
    });

    return () => {
      editor.dispose();
    };
  }, [initValue]);

  useEffect(() => {
    runCode(initValue, (state: any, instance: any) => {
      dispatch({
        type: 'backtracking/push',
        payload: [instance, state],
      });
    });

    dispatch({
      type: 'backtracking/init',
    });
  }, [initValue]);

  return (
    <div style={{ height: '100%', width: '100%' }} ref={refContainer}></div>
  );
}
