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
