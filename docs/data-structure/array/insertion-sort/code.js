const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 9, 7, 5],
  state: {
    end: '#edafda',
    inserted: '#ffdd00',
    get: null,
  },
  transition: {
    duration: 100,
  },
});

for (let i = 1; i < array.length; i++) {
  const key = array.get(i);
  let j = i - 1;
  array.setState(i, 'inserted');

  while (j >= 0 && array.get(j) > key) {
    array.setState(j, 'end');

    array.swap(j + 1, j);
    j = j - 1;
  }
  if (j >= 0) array.setState(j, 'end');
  array.setState(j + 1, 'end');
}
