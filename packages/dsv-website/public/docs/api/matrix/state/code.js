const matrix = dsv.create({
  type: 'matrix',
});

matrix.createMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

const item1 = matrix.getItem(2, 0);
item1.state = 'red';

const item2 = matrix.getItem(2, 2);
item2.state = 'green';
