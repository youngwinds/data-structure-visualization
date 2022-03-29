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

if (stack.isEmpty()) {
  stack.push(1)
} else {
  stack.pop()
}

if (stack.isEmpty()) {
  stack.push(2)
} else {
  stack.pop()
}

if (stack.isEmpty()) {
  stack.push(3)
} else {
  stack.pop()
}
`;

module.exports = {
  'zh-CN': 'isEmpty',
  'en-US': 'isEmpty',
  code: code,
};
