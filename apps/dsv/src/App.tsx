import { useEffect, useState } from 'react';
import { run } from 'parser';
import { Chart } from './Chart';

function App() {
  const [code, setCode] = useState(`
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const arr = [5, 3, 8, 4, 2];
// arr.pop()
// arr.push(1);
// bubbleSort(arr)

// console.log(arr)
// console.log(JSON.parse(JSON.stringify(arr)))

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

const arr1 = [5, 3, 8, 4, 2];

const arr2 = [1, 2, 4]

const arr3 = arr1.concat(arr2)
bubbleSort(arr3)

console.log(arr3)
console.log(JSON.parse(JSON.stringify(arr3)))

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
              id: 'array-fad29a',
              type: 'array',
              array: [5, 3, 8, 4, 2],
            },
            {
              id: 'array-7d8dc9',
              type: 'array',
              array: [1, 2, 4],
            },
            {
              id: 'array-94718b',
              type: 'array',
              array: [5, 3, 8, 4, 2, 1, 2, 4],
            },
          ],
          actions: [
            {
              structureId: 'array-fad29a',
              name: 'call',
              type: 'concat',
              args: [[1, 2, 4]],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [0, 3],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [1, 5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [2, 4],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [3, 8],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [3, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [4, 8],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [4, 1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [5, 8],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [6],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [6],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [5, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [6, 8],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [6],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [7],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [6],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [7],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [6, 4],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [7, 8],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [1, 4],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [2, 5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [2, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [3, 5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [3, 1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [4, 5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [4, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [5, 5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [6],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [6],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [5, 4],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [6, 5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [1, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [2, 4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [2, 1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [3, 4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [3, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [4, 4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [0, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [1, 3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [1, 1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [2, 3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [2, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [3, 3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [0, 1],
            },
            {
              structureId: 'array-94718b',
              name: 'set',
              type: 'set',
              args: [1, 2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [0],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [1],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [2],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [3],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [4],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [5],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [6],
            },
            {
              structureId: 'array-94718b',
              name: 'get',
              type: 'get',
              args: [7],
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
