import { useEffect, useRef, useState } from 'react';
import { DsArray } from '@dsv-charts/index';
import { DataType } from '@dsv-charts/typings/config';
import * as monaco from 'monaco-editor';

export function Editor() {
  const refChart = useRef<HTMLDivElement>(null);
  const refEditor = useRef<HTMLDivElement>(null);
  const editorInstance = useRef<monaco.editor.IStandaloneCodeEditor>();
  const code = `const array = new DsArray(dom, {
  type: 'tree',
  data: data,
  layout: {
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
});`;

  const data: DataType = new Array(5).fill(0).map((d, i) => {
    return {
      key: i.toString(),
      name: i.toString(),
      value: i,
    };
  });

  useEffect(() => {
    if (refEditor.current === null) {
      return () => {};
    }
    const editor = (editorInstance.current = monaco.editor.create(
      refEditor.current,
      {
        value: code,
        language: 'javascript',
      },
    ));

    const c = editor.getValue();

    const f = new Function('dom', 'DsArray', 'data', c);

    f(refChart.current, DsArray, data);

    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{ display: 'flex', height: '600px', background: '#ffffff' }}>
        <div style={{ flex: '1 0 0%' }}>
          <div ref={refChart} style={{ width: '100%', height: '100%' }}></div>
        </div>
        <div style={{ flex: '0 1 15px' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#eeeeee',
            }}
          ></div>
        </div>
        <div style={{ flex: '1 0 0%' }}>
          <div ref={refEditor} style={{ width: '100%', height: '600px' }}></div>
        </div>
      </div>
    </div>
  );
}
