const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
});

array.unshift(1);

const length = array.unshift(2, 3, 4);

array.unshift(length);
