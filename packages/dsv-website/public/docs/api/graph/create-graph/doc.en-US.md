# DsGraph.createGraph(adjTable)

## Description

The createGraph() method generates a graph based on the incoming adjacency table data.

## Parameters

- adjTable

Represents the adjacency table data using an array, each element being an object containing the name and ajdLinks arrays, the former representing the name of the current node and the latter representing the adjacency edges of the current node.

```
[
  { name: "A", ajdLinks: ["B", "C", "D"] }
  { name: "B", ajdLinks: ["C", "D"] },
  { name: "C", ajdLinks: ["D"] }
  { name: "D", ajdLinks: ["E"] }, { name: "D", ajdLinks: ["E"] }
  { name: "E", ajdLinks: ["A"] }, { name: "E", ajdLinks: ["A"] }
]
```

## Return value

None

Translated with www.DeepL.com/Translator (free version)
