const array = dsv.create({
  type: 'array',
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});

array.push(1);

const length = array.push(2);

array.push(length);
