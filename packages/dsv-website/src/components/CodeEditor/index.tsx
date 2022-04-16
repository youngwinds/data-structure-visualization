import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'umi';
import * as monaco from 'monaco-editor';
import { runCode } from '@dsv-website/utils/run-code';
interface ICodeEditor {
  path: string;
}

export function CodeEditor({ path }: ICodeEditor) {
  const dispatch = useDispatch();
  const refContainer = useRef<HTMLDivElement>(null);
  const refEditor = useRef<monaco.editor.IStandaloneCodeEditor>();
  const [code, setCode] = useState('');
  useEffect(() => {
    fetch(`http://localhost:8000/data-structure-visualization${path}/code.js`)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        console.log(data);
        setCode(data);
      })
      .catch(function (e) {
        console.log(e);
      });
  }, [path]);

  useEffect(() => {
    if (refContainer.current === null) {
      return () => {};
    }
    const editor = monaco.editor.create(refContainer.current, {
      value: code,
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
  }, [code]);

  useEffect(() => {
    runCode(code, (state: any, instance: any) => {
      dispatch({
        type: 'backtracking/push',
        payload: [instance, state],
      });
    });

    dispatch({
      type: 'backtracking/init',
    });
  }, [code]);

  return (
    <div style={{ height: '100%', width: '100%' }} ref={refContainer}></div>
  );
}
