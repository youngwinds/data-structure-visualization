const graph = dsv.create({
  type: 'graph',
});

graph.createGraph([
  { name: 'A', ajdLinks: ['B', 'C'] },
  { name: 'B', ajdLinks: ['B1', 'B2'] },
  { name: 'C', ajdLinks: ['C1', 'C2'] },

  { name: 'B1', ajdLinks: ['B11', 'B22'] },
  { name: 'B2', ajdLinks: [] },
  { name: 'B11', ajdLinks: [] },
  { name: 'B22', ajdLinks: [] },

  { name: 'C1', ajdLinks: ['C11', 'C22'] },
  { name: 'C2', ajdLinks: [] },
  { name: 'C11', ajdLinks: [] },
  { name: 'C22', ajdLinks: [] },
]);

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
