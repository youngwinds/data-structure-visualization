import { Array } from './Array';

describe('Array', () => {
  it('should create an array with correct length', () => {
    const arr = new Array([1, 2, 3]);
    expect(arr.length).toBe(3);
  });

  it('should set value correctly', () => {
    const arr = new Array([1, 2, 3]);
    arr.setValue(4, 1);
    expect(arr.getValue(1)).toBe(4);
  });

  it('should swap values correctly', () => {
    const arr = new Array([1, 2, 3]);
    arr.swap(0, 2);
    expect(arr.getValue(0)).toBe(3);
    expect(arr.getValue(2)).toBe(1);
  });

  it('should pop value correctly', () => {
    const arr = new Array([1, 2, 3]);
    const popped = arr.pop();
    expect(popped).toBe(3);
    expect(arr.length).toBe(2);
  });

  it('should push value correctly', () => {
    const arr = new Array([1, 2, 3]);
    const newLength = arr.push(4);
    expect(newLength).toBe(4);
    expect(arr.getValue(3)).toBe(4);
  });

  it('should iterate over values correctly', () => {
    const arr = new Array([1, 2, 3]);
    const result: number[] = [];
    arr.forEach((value) => {
      result.push(value);
    });
    expect(result).toEqual([1, 2, 3]);
  });

  it('should map values correctly', () => {
    const arr = new Array([1, 2, 3]);
    const result = arr.map((value) => value * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should sort values correctly', () => {
    const arr = new Array([3, 1, 2]);
    arr.sort((a, b) => a - b);
    expect(arr.getValue(0)).toBe(1);
    expect(arr.getValue(1)).toBe(2);
    expect(arr.getValue(2)).toBe(3);
  });
});

describe('Algorithm', () => {
  test('bubbleSort', () => {
    const array = new Array<number>([10, 9, 8, 1, 2, 3, 4, 7, 6, 5]);

    const length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array.getValue(j) > array.getValue(j + 1)) {
          array.swap(j, j + 1);
        }
      }
    }

    expect(array.map((d) => d)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('selectionSort', () => {
    const array = new Array<number>([10, 9, 8, 1, 2, 3, 4, 7, 6, 5]);

    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < length; j++) {
        if (array.getValue(j) < array.getValue(minIndex)) {
          minIndex = j;
        }
      }
      array.swap(i, minIndex);
    }

    expect(array.map((d) => d)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('insertionSort', () => {
    const array = new Array<number>([10, 9, 8, 1, 2, 3, 4, 7, 6, 5]);

    const length = array.length;

    for (let i = 1; i < length; i++) {
      const current = array.getValue(i);
      let j = i - 1;
      while (j >= 0 && array.getValue(j) > current) {
        array.setValue(array.getValue(j), j + 1);
        j--;
      }
      array.setValue(current, j + 1);
    }

    expect(array.map((d) => d)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('quickSort', () => {
    const array = new Array<number>([10, 9, 8, 1, 2, 3, 4, 7, 6, 5]);

    function quickSort(array: Array<number>, left: number, right: number) {
      if (left >= right) {
        return;
      }

      const pivotIndex = partition(array, left, right);
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }

    function partition(array: Array<number>, left: number, right: number) {
      const pivot = array.getValue(right);
      let i = left;
      for (let j = left; j < right; j++) {
        if (array.getValue(j) < pivot) {
          array.swap(i, j);
          i++;
        }
      }
      array.swap(i, right);
      return i;
    }

    quickSort(array, 0, array.length - 1);

    expect(array.map((d) => d)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('mergeSort', () => {
    const array = new Array<number>([10, 9, 8, 1, 2, 3, 4, 7, 6, 5]);

    function mergeSort(array: Array<number>, left: number, right: number) {
      if (left >= right) {
        return;
      }

      const mid = Math.floor((left + right) / 2);
      mergeSort(array, left, mid);
      mergeSort(array, mid + 1, right);
      merge(array, left, mid, right);
    }

    function merge(
      array: Array<number>,
      left: number,
      mid: number,
      right: number
    ) {
      const temp: number[] = [];
      let i = left;
      let j = mid + 1;
      while (i <= mid && j <= right) {
        if (array.getValue(i) <= array.getValue(j)) {
          temp.push(array.getValue(i));
          i++;
        } else {
          temp.push(array.getValue(j));
          j++;
        }
      }
      while (i <= mid) {
        temp.push(array.getValue(i));
        i++;
      }
      while (j <= right) {
        temp.push(array.getValue(j));
        j++;
      }
      for (let k = 0; k < temp.length; k++) {
        array.setValue(temp[k], left + k);
      }
    }

    mergeSort(array, 0, array.length - 1);

    expect(array.map((d) => d)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
