const matrix = dsv.create({
  type: 'matrix',
  data: [[1, 2, 3]],
});

matrix.createMatrix([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
]);

console.log(matrix);
