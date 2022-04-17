const stack = dsv.create({
  type: 'stack',
  data: [],
  layout: {
    padding: {
      left: 0,
      right: 0,
      bottom: 50,
      top: 50,
    },
    position: 'absolute',
    width: 150,
    right: 50,
  },
});

const tokens = ['1', '2', '+', '3', '4', '*', '*', '5', '+'];

for (let i = 0; i < tokens.length; i++) {
  const token = tokens[i];
  if (['+', '-', '*', '/'].includes(token)) {
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
          throw new Error('Divide by 0');
        }
        // For simplicity, keep 2 decimal places
        stack.push(Number((v1 / v2).toFixed(2)));
        break;
      }
    }
  } else {
    stack.push(Number(token));
  }
}
