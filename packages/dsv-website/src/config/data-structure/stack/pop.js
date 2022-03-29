const code = `const stack = dsv.create({
  type: 'stack',
  data: [1, 2, 3],
  layout: {
    padding: {
      left: 300,
      right: 300,
      bottom: 50,
      top: 50,
    }
  }
})

stack.pop()

stack.pop()
`;

module.exports = {
  'zh-CN': 'pop',
  'en-US': 'pop',
  code: code,
};
