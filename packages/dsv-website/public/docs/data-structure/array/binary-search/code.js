const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 9, 7, 5],
  state: {
    target: '#ffdd00',
  },
});

function binarySearch(arr, left, right, target) {
  if (right >= left) {
    let mid = left + ((right - left) >> 1);
    const midValue = arr.get(mid);

    if (midValue === target) {
      arr.setState(mid, 'target');
      return mid;
    } else if (midValue > target) {
      return binarySearch(arr, left, mid - 1, target);
    }

    return binarySearch(arr, mid + 1, right, target);
  }

  return -1;
}

array.sort();

const target = 10;
const result = binarySearch(array, 0, array.length - 1, target);
