const code = `const array = dsv.create({
  type: 'array',
  data: [4, 3, 2, 1]
})

const size = array.getSize();

for (let i = 1; i < size; i++) {
  for (let j = 0; j < size - i; j++) {
    if (array.get([j]) > array.get([j + 1])) {
      array.swap(j, j + 1)
    }
  }
}
`;

module.exports = {
  'zh-CN': '冒泡排序',
  'en-US': 'Bublle Sort',
  code: code,
};
