const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
  state: {
    end: '#edafda',
    pivot: '#d87c7c',
  },
  transition: {
    duration: 100,
  },
});

function partition(arr, low, high) {
  let pivot = arr.get(high);
  arr.setState(high, 'pivot');
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr.get(j) < pivot) {
      i++;
      arr.swap(i, j);
    }
  }
  arr.swap(i + 1, high);
  arr.setState(i + 1, 'end');
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low <= high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

quickSort(array, 0, array.length - 1);
