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
    left: 50,
  },
});

const operatorStack = dsv.create({
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

const tokens = ['(', '1', '+', '2', ')', '*', '3', '*', '4', '+', '5']; // ( 1 + 2 ) * 3 * 4 + 5

const legalOperator = ['(', ')', '+', '-', '*', '/'];

for (let ch of tokens) {
  if (legalOperator.includes(ch)) {
    if (ch === '(') {
      operatorStack.push(ch);
    } else if (ch === ')') {
      while (operatorStack.top() !== '(') {
        stack.push(operatorStack.pop());
      }
      operatorStack.pop();
    } else if (ch === '+' || ch === '-') {
      while (
        !operatorStack.isEmpty() &&
        ['*', '/'].includes(operatorStack.top())
      ) {
        stack.push(operatorStack.pop());
      }
      operatorStack.push(ch);
    } else if (ch === '*' || ch === '/') {
      operatorStack.push(ch);
    }
  } else {
    stack.push(ch);
  }
}

while (!operatorStack.isEmpty()) {
  stack.push(operatorStack.pop());
}
