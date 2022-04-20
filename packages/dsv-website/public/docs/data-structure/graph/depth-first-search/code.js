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

function dfs(rootNodeName) {
  visitedSet.add(rootNodeName);
  const dsNode = graph.findNode(rootNodeName);
  dsNode.setVisual('#edafda');
  let pointer = dsNode.next;

  while (pointer !== null) {
    if (!visitedSet.has(pointer.name)) {
      dfs(pointer.name);
    }

    pointer = pointer.next;
  }
}

dfs('A');

graph.startLayout();
