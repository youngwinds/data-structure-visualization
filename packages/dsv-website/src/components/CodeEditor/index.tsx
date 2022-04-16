import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'umi';
import { Skeleton } from 'antd';
import { useBoolean } from 'ahooks';
import * as monaco from 'monaco-editor';
import { runCode } from '@dsv-website/utils/run-code';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

interface ICodeEditor {
  path: string;
}

export function CodeEditor({ path }: ICodeEditor) {
  const dispatch = useDispatch();
  const refContainer = useRef<HTMLDivElement>(null);
  const refEditor = useRef<monaco.editor.IStandaloneCodeEditor>();
  const [code, setCode] = useState('');
  const [isLoading, { setFalse, setTrue }] = useBoolean();

  const fetchCode = useCallback(async () => {
    setTrue();
    const response = await fetch(
      `${location.origin}/data-structure-visualization${path}/code.js`,
    );
    const text = await response.text();
    const data = prettier.format(text, {
      parser: 'babel',
      plugins: [parserBabel],
    });
    setCode(data);
    setFalse();
    return data;
  }, [path]);

  useEffect(() => {
    const asyncFunc = async () => {
      const code = await fetchCode();

      if (refContainer.current === null || code.length === 0) {
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
    };

    asyncFunc();

    return () => {
      if (refEditor.current) {
        refEditor.current.dispose();
      }
    };
  }, [path]);

  useEffect(() => {
    if (code.length === 0) {
      return () => {};
    }
    runCode(code, (state: any, instance: any) => {
      dispatch({
        type: 'backtracking/push',
        payload: [instance, state],
      });
    });

    dispatch({
      type: 'backtracking/init',
    });

    return () => {
      dispatch({
        type: 'backtracking/destroy',
      });
    };
  }, [code]);

  return (
    <Skeleton active loading={isLoading}>
      <div style={{ height: '100%', width: '100%' }} ref={refContainer}></div>
    </Skeleton>
  );
}
