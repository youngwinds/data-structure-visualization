import { useCallback, useEffect, useState } from 'react';
import { run } from 'parser';
import { useDsv } from '../model';

export const CodeEditor = () => {
  const setSchema = useDsv((state) => state.setSchema);

  const ArrayProtoType = `
Array.prototype.swap = function(i, j){
  const temp = this[i]
  this[i] = this[j]
  this[j] = temp
}

Array.prototype.compare = function(i, j, fn) {
  return fn(this[i], this[j]);
};
`;
  const [code, setCode] = useState(`${ArrayProtoType}
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr.compare(j, j + 1, (a, b) => a > b)) {
        arr.swap(j, j+1)
      }
    }
  }
  console.log("res", arr)
  return arr;
}

const arr1 = [5, 3, 8, 4, 2, 1, 2, 4];

bubbleSort(arr1)
`);

  const handleExec = useCallback(() => {
    const result = run(code);
    setSchema(result.schema);
  }, [code]);

  return (
    <>
      <textarea
        style={{
          margin: '12px',
          width: '480px',
          height: '600px',
          padding: '12px',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}
        placeholder="在此输入代码..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleExec}>Run</button>
    </>
  );
};
