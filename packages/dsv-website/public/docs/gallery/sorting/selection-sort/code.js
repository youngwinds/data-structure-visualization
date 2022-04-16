const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
  state: {
    end: '#edafda',
  },
  transition: {
    duration: 100,
  },
});

for (let i = 0; i < array.length; i++) {
  let targetIndex = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array.get(j) < array.get(targetIndex)) {
      targetIndex = j;
    }
  }
  array.swap(targetIndex, i);
  array.setState(i, 'end');
}