# DsGraph.createGraph(adjTable)

## 描述

createGraph() 方法基于传入的邻接表数据，生成一个图。

## 参数

- adjTable

使用一个数组代表邻接表数据，每个元素是一个对象，该对象包含name和ajdLinks数组，前者代表当前结点的名称，后者代表当前结点的邻接边。

```
[
  { name: "A", ajdLinks: ["B", "C", "D"] },
  { name: "B", ajdLinks: ["C", "D"] },
  { name: "C", ajdLinks: ["D"] },
  { name: "D", ajdLinks: ["E"] },
  { name: "E", ajdLinks: ["A"] },
]
```

## 返回值

无