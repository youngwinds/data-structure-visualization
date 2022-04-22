const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 9, 7, 5],
  state: {
    end: '#edafda',
  },
  transition: {
    duration: 100,
  },
});

for (let j = 0; j < array.length - 1; j++) {
  if (array.get([j]) > array.get([j + 1])) {
    array.swap(j, j + 1);
  }
}
array.setState(array.length - 1, 'end');
