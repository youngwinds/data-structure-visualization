import { run } from "../src";

describe("sort", () => {
  test("quick sort", () => {
    const code = `
Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

const quickSort = (arr) => {
  const partition = (low, high) => {
    // 取中间元素作为基准值（三数取中法优化）
    let mid = Math.floor((low + high) / 2);
    arr.swap(mid, high);
    const pivot = arr[high];

    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        arr.swap(i, j);
      }
    }
    arr.swap(i + 1, high);
    return i + 1;
  };

  const sort = (low, high) => {
    if (low < high) {
      const pi = partition(low, high);
      sort(low, pi - 1);
      sort(pi + 1, high);
    }
  };

  sort(0, arr.length - 1);
  console.log("res", arr);
  return arr;
};

// ... 保留原有的冒泡排序代码 ...

const arr1 = [
  5, 3, 8, 4, 2, 1, 2, 9, 1, 2, 3, 3, 6, 12, 34, 23, 11, 45, 13, 52,
];

// 测试快速排序
quickSort(arr1); // 使用扩展运算符避免修改原数组
`;
    const res = run(code);
    expect(res).toMatchSnapshot();
  });

  test("bubble sort", () => {
    const code = `
Array.prototype.swap = function(i, j){
    const temp = this[i]
    this[i] = this[j]
    this[j] = temp
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr.swap(j, j+1)
      }
    }
  }
  console.log("res", arr)
  return arr;
}

const arr1 = [5, 3, 8, 4, 2, 1, 2, 4];

bubbleSort(arr1)
`;
    const res = run(code);
    expect(res).toMatchSnapshot();
  });

  test("insert sort", () => {
    const code = `
Array.prototype.swap = function(i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

const testArr = [5, 2, 4, 6, 1, 3, 9, 7];
insertSort(testArr);
`;
    const res = run(code);
    expect(res).toMatchSnapshot();
  });

  test("shell sort", () => {
    const code = `
const shellSort = (arr) => {
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
};

shellSort([9, 4, 2, 7, 1, 5, 3, 8, 6])`;
    expect(run(code)).toMatchSnapshot();
  });

  test("selection sort", () => {
    const code = `
Array.prototype.swap = function(i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

const selectionSort = (arr) => {
  // 外层循环遍历每个位置
  for (let current = 0; current < arr.length - 1; current++) {
    let minIndex = current;
    
    // 内层循环寻找最小值索引
    for (let scan = current + 1; scan < arr.length; scan++) {
      if (arr[scan] < arr[minIndex]) {
        minIndex = scan;
      }
    }
    
    // 仅在需要时交换（优化点）
    if (minIndex !== current) {
      arr.swap(current, minIndex);
    }
  }
  console.log('Sorted array:', arr);
  return arr;
};

// 测试包含正负数、重复值的复杂数组
const testData = [3, 0, -2, 5, -1, 4, 1, 9, -5, 4];
selectionSort(testData)`;
    expect(run(code)).toMatchSnapshot();
  });

  test("heap sort", () => {
    const code = `

    Array.prototype.swap = function(i, j) {
      const temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    };
    
    function heapSort(arr) {
      function heapify(n, i) {
        let largest = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        
        if (l < n && arr[l] > arr[largest]) largest = l;
        if (r < n && arr[r] > arr[largest]) largest = r;
        if (largest !== i) {
          arr.swap(i, largest); // 改用 swap 方法
          heapify(n, largest);
        }
      }
    
      // 构建最大堆
      for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr.length, i);
      }
    
      // 逐个提取元素
      for (let i = arr.length - 1; i > 0; i--) {
        arr.swap(0, i); // 改用 swap 方法
        heapify(i, 0);
      }
      return arr;
    }
    
    heapSort([6,7,8, 1, 3, 4, 10, 3, 5, 1])`;
    expect(run(code)).toMatchSnapshot();
  });

  test("in-place merge sort", () => {
    const code = `
Array.prototype.swap = function(i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  
  let mid = Math.floor((left + right) / 2);
  
  // 递归分割
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  
  // 双指针合并算法
  let i = left;
  let j = mid + 1;
  
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      i++;
    } else {
      // 将右侧元素插入到i位置
      const temp = arr[j];
      for (let k = j; k > i; k--) {
        arr.swap(k, k - 1);
      }
      arr[i] = temp;
      
      // 更新指针位置
      i++;
      mid++;
      j++;
    }
  }
  return arr;
}

mergeSort([5, 2, 8, 4, 7, 1, 3, 6, 9])`;
    expect(run(code)).toMatchSnapshot();
  });
});
