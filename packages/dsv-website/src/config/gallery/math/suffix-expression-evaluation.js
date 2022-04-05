const code = `const stack = dsv.create({
  type: 'stack',
  data: [],
  layout: {
    padding: {
      left: 300,
      right: 300,
      bottom: 50,
      top: 50,
    }
  }
})

const tokens = ["2","1","+","3","*"]

for (let i = 0; i < tokens.length; i++) {
  const token = tokens[i];

  if (["+", "-", "*", "/"].includes(token)) {
    switch (token) {
      case '+': {
        const v2 = stack.pop();
        const v1 = stack.pop();
        stack.push(v1 + v2);
        break;
      }
      case '-': {
        const v2 = stack.pop();
        const v1 = stack.pop();
        stack.push(v1 - v2);
        break;
      }
      case '*': {
        const v2 = stack.pop();
        const v1 = stack.pop();
        stack.push(v1 * v2);
        break;
      }
      case '/': {
        const v2 = stack.pop();
        const v1 = stack.pop();
        if (v2 === 0) {
          throw new Error("Divide by 0")
        }
        // For simplicity, keep 2 decimal places
        stack.push(Number((v1 / v2).toFixed(2)));
        break;
      }
    }
  } else {
    stack.push(Number(token))
  }
}`;

module.exports = {
  'zh-CN': '后缀表达式求值',
  'en-US': 'Suffix Expression Evaluation',
  code: code,
};
