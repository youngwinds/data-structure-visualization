import { useEffect, useState } from 'react';
import { run } from 'parser';
import { Chart } from './Chart';
import { StructureType } from 'schema';

function App() {
  const [code, setCode] = useState(`
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr1 = [5, 3, 8, 4, 2, 1, 2, 4];

bubbleSort(arr1)

`);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100vh',
      }}
    >
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
      <button onClick={() => run(code)}>Run</button>
      <Chart
        schema={{
          structures: [
            {
              id: 'array-f5c481',
              type: StructureType.Array,
              array: [5, 3, 8, 4, 2, 1, 2, 4],
            },
          ],
          actions: [
            {
              structureId: 'array-f5c481',
              name: 'swap',
              type: 'swap',
              args: [0, 1],
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
