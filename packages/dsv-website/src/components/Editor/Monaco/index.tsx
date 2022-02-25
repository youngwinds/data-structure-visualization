import { useCallback, useEffect, useRef } from 'react';
import { DsArray } from '@dsv-charts/charts';
import * as monaco from 'monaco-editor';

interface IMonaco {
  value: string;
}

export function Monaco({ value }: IMonaco) {
  const refContainer = useRef<HTMLDivElement>(null);
  const refEditor = useRef<monaco.editor.IStandaloneCodeEditor>();

  const runCode = useCallback(() => {
    if (refEditor.current === null || refEditor.current === undefined) {
      return;
    }

    const code = refEditor.current.getValue();

    const chartContainer = document.querySelector('#container');
    chartContainer && (chartContainer.innerHTML = '');
    const runFun = new Function('DsArray', code);

    runFun(DsArray);
  }, []);

  useEffect(() => {
    if (refContainer.current === null) {
      return () => {};
    }

    const editor = monaco.editor.create(refContainer.current, {
      value,
      language: 'javascript',
    });

    editor.getValue();

    refEditor.current = editor;

    runCode();
    return () => {
      editor.dispose();
    };
  }, [value]);

  return (
    <div ref={refContainer} style={{ width: '100%', height: '100%' }}></div>
  );
}
