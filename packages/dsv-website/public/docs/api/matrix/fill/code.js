const matrix = dsv.create({
  type: 'matrix',
  data: [
    [
      { key: '1', state: 'red', name: '1', value: 1, rowIndex: 0, colIndex: 0 },
      { key: '2', name: '2', value: 2, rowIndex: 0, colIndex: 1 },
      { key: '3', name: '3', value: 3, rowIndex: 0, colIndex: 2 },
    ],
    [
      { key: '4', name: '4', value: 4, rowIndex: 1, colIndex: 0 },
      { key: '5', name: '5', value: 5, rowIndex: 1, colIndex: 1 },
      { key: '6', name: '6', value: 6, rowIndex: 1, colIndex: 2 },
    ],
    [
      { key: '7', name: '7', value: 7, rowIndex: 2, colIndex: 0 },
      { key: '8', name: '8', value: 8, rowIndex: 2, colIndex: 1 },
      { key: '9', name: '9', value: 9, rowIndex: 2, colIndex: 2 },
    ],
  ],
});

setTimeout(() => {
  matrix.updateData([
    [
      { key: '3', name: '1', value: 1, rowIndex: 0, colIndex: 0 },
      { key: '7', name: '2', value: 2, rowIndex: 0, colIndex: 1 },
      { key: '1', name: '3', value: 3, rowIndex: 0, colIndex: 2 },
    ],
    [
      { key: '5', name: '4', value: 4, rowIndex: 1, colIndex: 0 },
      { key: '9', name: '5', value: 5, rowIndex: 1, colIndex: 1 },
      { key: '8', name: '6', value: 6, rowIndex: 1, colIndex: 2 },
    ],
    [
      { key: '2', name: '7', value: 7, rowIndex: 2, colIndex: 0 },
      { key: '6', name: '8', value: 8, rowIndex: 2, colIndex: 1 },
      { key: '4', name: '9', value: 9, rowIndex: 2, colIndex: 2 },
    ],
  ]);

  matrix.render();
}, 1500);

console.log(matrix);
