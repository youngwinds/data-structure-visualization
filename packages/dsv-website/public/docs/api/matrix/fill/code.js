const matrix = dsv.create({
  type: 'matrix',
  data: [
    [
      { name: '4', value: 2 },
      { name: '5', value: 2 },
      { name: '6', value: 2 },
    ],
    [
      { name: '1', value: 1 },
      { name: '2', value: 2 },
      { name: '3', value: 2 },
    ],
  ],
});

setTimeout(() => {
  matrix.updateData([
    [
      { name: '1', value: 1 },
      { name: '2', value: 2 },
      { name: '3', value: 2 },
    ],
    [
      { name: '4', value: 2 },
      { name: '5', value: 2 },
      { name: '6', value: 2 },
    ],
  ]);

  matrix.render();
}, 1500);

console.log(matrix);
