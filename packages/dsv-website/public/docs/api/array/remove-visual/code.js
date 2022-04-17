const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
});

array.setVisual(0, 'red');

array.removeVisual(0);

array.setVisual([0, 1, 2, 3], 'red');

array.removeVisual([0, 1]);

array.setVisual([0, 1], 'red');

array.removeVisual();
