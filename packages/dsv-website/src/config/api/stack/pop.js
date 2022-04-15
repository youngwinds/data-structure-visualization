const code = `const stack = dsv.create({
  type: 'stack',
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  layout: {
    padding: {
      left: 300,
      right: 300,
      bottom: 50,
      top: 50,
    }
  }
})

while (stack.isEmpty() === false) {
  stack.pop();
}
`;

module.exports = {
  'zh-CN': 'pop',
  'en-US': 'pop',
  code: code,
};
