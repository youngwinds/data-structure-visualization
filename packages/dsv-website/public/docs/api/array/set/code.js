const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
});

const value = array.set(0, 20);

array.set(1, value);
