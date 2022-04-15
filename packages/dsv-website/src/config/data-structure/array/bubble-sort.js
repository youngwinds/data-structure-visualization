const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
  state: {
    end: '#edafda'
  },
  transition: {
    duration: 100
  },
})

for (let i = 1; i <= array.length; i++) {
  for (let j = 0; j < array.length - i; j++) {
    if (array.get([j]) > array.get([j + 1])) {
      array.swap(j, j + 1)
    }
  }
  array.setState(array.length - i, 'end')
}
`;

module.exports = {
  'zh-CN': '冒泡排序',
  'en-US': 'Bubble Sort',
  code: code,
  path: '/docs/data-structure/array/bubble-sort',
};
