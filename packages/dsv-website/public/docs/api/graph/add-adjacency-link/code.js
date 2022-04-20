const graph = dsv.create({
  type: 'graph',
});

const A = graph.createNode({ name: 'A' });
const B = graph.createNode({ name: 'B' });
const C = graph.createNode({ name: 'C' });

A.addAdjacencyLink(B).addAdjacencyLink(C);

B.addAdjacencyLink(C);

graph.startLayout();
