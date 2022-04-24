const matrix = dsv.create({
  type: 'matrix',
});

matrix.createMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

for (let ch of matrix.getRow(1)) {
  ch.state = 'red';
}
