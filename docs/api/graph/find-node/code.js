const graph = dsv.create({
  type: 'graph',
});

graph.createGraph([
  { name: 'A', ajdLinks: ['B', 'C', 'D'] },
  { name: 'B', ajdLinks: ['C', 'D'] },
  { name: 'C', ajdLinks: ['D'] },
  { name: 'D', ajdLinks: ['E'] },
  { name: 'E', ajdLinks: ['A'] },
]);

const A = graph.findNode('A');

A.setVisual('#edafda');

const B = graph.findNode('B');
B.setVisual('#edafda');

graph.startLayout();
