const matrix = dsv.create({
  type: 'matrix',
});

matrix.createMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

const item = matrix.getItem(2, 0);

item.name = 'Name';
item.value = 99;
