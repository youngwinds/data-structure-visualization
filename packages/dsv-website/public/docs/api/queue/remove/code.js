const queue = dsv.create({
  type: 'queue',
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
});

queue.remove();

const value = queue.remove();

queue.add(value);
