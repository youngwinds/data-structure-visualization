const graph = dsv.create({
  type: 'graph',
});

const A = graph.createNode({ name: 'A' });
const B = graph.createNode({ name: 'B' });
const C = graph.createNode({ name: 'C' });
const D = graph.createNode({ name: 'D' });
const E = graph.createNode({ name: 'E' });

A.addAdjacencyLink(B).addAdjacencyLink(C).addAdjacencyLink(D);

B.addAdjacencyLink(C).addAdjacencyLink(D);

C.addAdjacencyLink(D);

D.addAdjacencyLink(E);

E.addAdjacencyLink(A);

graph.startLayout();
