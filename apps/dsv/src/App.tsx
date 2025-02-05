import { useEffect, useState } from 'react';
import { run } from 'parser';

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
    </div>
  );
}

export default App;
