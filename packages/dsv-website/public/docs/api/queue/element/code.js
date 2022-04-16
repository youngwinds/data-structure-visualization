const queue = dsv.create({
  type: 'queue',
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
});

const value = queue.element();

queue.add(value);
