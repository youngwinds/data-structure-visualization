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
  
const topValue = stack.top()

stack.push(topValue)
`;

module.exports = {
  'zh-CN': 'top',
  'en-US': 'top',
  code: code,
};
