const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
});

array.fill(5, 3);

array.fill(2, 0, 5);

array.fill(1);
