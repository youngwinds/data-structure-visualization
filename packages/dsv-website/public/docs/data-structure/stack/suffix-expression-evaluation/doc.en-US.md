# Suffix Expression Evaluation

As Postfix expression is without parenthesis and can be evaluated as two operands and an operator at a time, this becomes easier for the compiler and the computer to handle.

Evaluation rule of a Postfix Expression states:

While reading the expression from left to right, push the element in the stack if it is an operand.

Pop the two operands from the stack, if the element is an operator and then evaluate it.

Push back the result of the evaluation. Repeat it till the end of the expression.
