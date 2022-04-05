const code = `const stack = dsv.create({
    type: 'stack',
    data: [],
    layout: {
        padding: {
            left: 0,
            right: 0,
            bottom: 50,
            top: 0,
        },
        position: 'absolute',
        width: 200,
        left: 100
    }
})

const operatorStack = dsv.create({
    type: 'stack',
    data: [],
    layout: {
        padding: {
            left: 0,
            right: 0,
            bottom: 50,
            top: 0,
        },
        position: 'absolute',
        width: 200,
        right: 100,
    }
})

const tokens = ["(", "1", "+", "2", ")", "*", "3", "*", "4", "+", "5"]; // ( 1 + 2 ) * 3 * 4 + 5
const legalOperator = ["(", ")", "+", "-", "*", "/"];

for (let ch of tokens) {
    if (legalOperator.includes(ch)) {
        if (ch === "(") {
            operatorStack.push(ch);
        } else if (ch === ")") {
            while (operatorStack.top() !== '(') {
                stack.push(operatorStack.pop())
            }
            operatorStack.pop()
        } else if (ch === "+" || ch === "-") {
            console.log(operatorStack.top())
            while (!operatorStack.isEmpty() && ["*", '/'].includes(operatorStack.top())) {
                stack.push(operatorStack.pop());
            }
            operatorStack.push(ch);
        } else if (ch === "*" || ch === "/") {
            operatorStack.push(ch)
        }
    } else {
        stack.push(ch)
    }
}

while (!operatorStack.isEmpty()) {
    stack.push(operatorStack.pop())
}`;

module.exports = {
  'zh-CN': '中缀表达式转后缀',
  'en-US': 'Infix Expression To Suffix',
  code: code,
};
