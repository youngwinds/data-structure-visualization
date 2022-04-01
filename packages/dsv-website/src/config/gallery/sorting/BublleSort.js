const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

const len = array.getSize();

for (let j = 1; j < len; j++) {
  for (let i = 0; i < len - j; i++) {
    if (array.get([i]) > array.get([i + 1])) {
      array.swap(i, i + 1)
    }
  }
}
`;

module.exports = {
  'zh-CN': '冒泡排序',
  'en-US': 'Bublle Sort',
  code: code,
};
