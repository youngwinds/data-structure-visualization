# 后缀表达式计算

由于 Postfix 表达式没有括号，并且一次可以作为两个操作数和一个运算符进行计算，这对于编译器和计算机来说变得更容易处理。

后缀表达式的评估规则规定：

从左到右读取表达式时，如果该元素是操作数，则将其压入堆栈。

如果元素是运算符，则从堆栈中弹出两个操作数，然后对其求值。

推回评估结果。 重复直到表达式结束。
