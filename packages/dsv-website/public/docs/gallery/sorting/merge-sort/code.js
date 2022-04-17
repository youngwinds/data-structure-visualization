const tempArray = dsv.create({
  type: 'array',
  data: [],
  transition: {
    duration: 100,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      bottom: 30,
      top: 20,
    },
    height: 275,
  },
});

const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 9, 7, 5],
  state: {
    end: '#edafda',
    pivot: '#d87c7c',
  },
  transition: {
    duration: 100,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      bottom: 30,
      top: 50,
    },
    height: 275,
  },
});

function merge(arr, left, middle, right) {
  let n1 = middle - left + 1;
  let n2 = right - middle;

  let p1 = 0;
  let p2 = 0;

  while (p1 < n1 && p2 < n2) {
    if (arr.get(left + p1) <= arr.get(middle + 1 + p2)) {
      tempArray.push(arr.get(left + p1));
      p1++;
    } else {
      tempArray.push(arr.get(middle + 1 + p2));
      p2++;
    }
  }

  while (p1 < n1) {
    tempArray.push(arr.get(left + p1));
    p1++;
  }

  while (p2 < n2) {
    tempArray.push(arr.get(middle + 1 + p2));
    p2++;
  }

  for (let index = right; index >= left; index--) {
    arr.set(index, tempArray.pop());
  }

  // clear
  tempArray.splice(0, tempArray.length);
}

function mergeSort(arr, left, right) {
  arr.removeVisual();

  if (left >= right) {
    return;
  }
  let middle = ((right - left) >> 1) + left;
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);

  merge(arr, left, middle, right);
}

mergeSort(array, 0, array.length - 1);
