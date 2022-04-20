const graph = dsv.create({
  type: 'graph',
});

const A = graph.createNode({ name: 'A' });
const B = graph.createNode({ name: 'B' });
const C = graph.createNode({ name: 'C' });
const D = graph.createNode({ name: 'D' });
const E = graph.createNode({ name: 'E' });

A.addAdjacencyLink(B);

A.addAdjacencyLink(C);

B.addAdjacencyLink(D);

B.addAdjacencyLink(C);

D.addAdjacencyLink(E);

const visitedSet = new Set();

function dfs(node) {
  visitedSet.add(node.name);
  console.log(node.name);
  let pointer = graph.findNode(node.name).next;
  while (pointer !== null) {
    if (!visitedSet.has(pointer.name)) {
      dfs(pointer);
    }

    pointer = pointer.next;
  }
}

dfs(A);

graph.startLayout();