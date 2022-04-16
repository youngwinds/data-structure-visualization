const queue = dsv.create({
  type: 'queue',
  data: [1, 2, 3],
});

queue.add(4);

queue.add(5, 6);

queue.add(7, 8, 9);
