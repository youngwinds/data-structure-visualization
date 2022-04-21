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

function findMinNumber() {
  let min = Infinity;
  let minIndex = -1;

  for (let i = 0; i < array.length; i++) {
    const value = array.get(i);
    if (min > value) {
      minIndex !== -1 && array.removeVisual(minIndex);
      array.setVisual(i, '#edafda');

      min = value;
      minIndex = i;
    }
  }
}

findMinNumber();
