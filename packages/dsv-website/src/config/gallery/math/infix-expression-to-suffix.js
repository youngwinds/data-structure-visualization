const code = `const stack = dsv.create({
    type: 'stack',
    data: [],
    layout: {
        padding: {
            left: 150,
            right: 150,
            bottom: 50,
            top: 50,
        }
    }
})

const operatorStack = [];
const tokens = ["(", "1", "+", "2", ")", "*", "3", "*", "4", "+", "5"]; // ( 1 + 2 ) * 3 * 4 + 5
const legalOperator = ["(", ")", "+", "-", "*", "/"];

for (let ch of tokens) {
    if (legalOperator.includes(ch)) {
        if (ch === "(") {
            operatorStack.push(ch);
        } else if (ch === ")") {
            while (operatorStack[operatorStack.length - 1] !== '(') {
                stack.push(operatorStack.pop())
            }
            operatorStack.pop()
        } else if (ch === "+" || ch === "-") {
            while (["*", '/'].includes(operatorStack[operatorStack.length - 1])) {
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

while (operatorStack.length) {
    stack.push(operatorStack.pop())
}`;

module.exports = {
  'zh-CN': '中缀表达式转后缀',
  'en-US': 'Infix Expression To Suffix',
  code: code,
};
