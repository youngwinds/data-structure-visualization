const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 9, 7, 5],
  transition: {
    duration: 100,
  },
});

function findMinNumber() {
  let max = -Infinity;
  let maxIndex = -1;

  for (let i = 0; i < array.length; i++) {
    const value = array.get(i);
    if (max < value) {
      maxIndex !== -1 && array.removeVisual(maxIndex);
      array.setVisual(i, '#edafda');

      max = value;
      maxIndex = i;
    }
  }
}

findMinNumber();
