# 快速排序

快速排序是一种分而治之的算法。

它选择一个元素作为"基准枢纽"，并围绕选择的"基准枢纽"对给定数组进行分区。

有许多不同版本的快速排序以不同的方式选择"基准枢纽"。

1. 选择第一个元素作为"基准枢纽"。
2. 选择最后一个元素作为"基准枢纽"。
3. 选择一个中间元素作为"基准枢纽"。
4. 选择一个随机元素作为"基准枢纽"。

快速排序中的关键过程是分区。

分区的目标是，选择一个元素 x 作为"基准枢纽"后，进行如下操作

1. 将 x 放在已排序数组中的正确位置
2. 将所有小于x的元素放在 x 之前
3. 将所有大于x的元素放在 x 之后。 

经过上面一系列操作过后，我们可以得到两个更小规模的数组。随后我们进行如下操作：

1. 对小于x的所有元素，重复进行分区
2. 对大于x的所有元素，重新进行分区

我们可以得到四个更小规模的数组，重复这些步骤，直到数组长度<=1时终止。我们就可以得到已经排序完成的数组。