const graph = dsv.create({
  type: 'graph',
});

const A = graph.createNode({ name: 'A' });
const B = graph.createNode({ name: 'B' });
const C = graph.createNode({ name: 'C' });
const D = graph.createNode({ name: 'D' });
const E = graph.createNode({ name: 'E' });
const F = graph.createNode({ name: 'F' });
const G = graph.createNode({ name: 'G' });
const H = graph.createNode({ name: 'H' });
const I = graph.createNode({ name: 'J' });
const J = graph.createNode({ name: 'K' });
const K = graph.createNode({ name: 'L' });

A.addAdjacencyLink(B);

A.addAdjacencyLink(C);

B.addAdjacencyLink(C);

graph.startLayout();
