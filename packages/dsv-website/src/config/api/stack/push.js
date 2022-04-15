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

stack.push(15)

stack.push(20, 30)

stack.push(40, 50, 60)
 `;

module.exports = {
  'zh-CN': 'push',
  'en-US': 'push',
  code: code,
};
