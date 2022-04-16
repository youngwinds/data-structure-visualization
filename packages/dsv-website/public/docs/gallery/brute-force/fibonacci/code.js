const tree = dsv.create({
  type: 'tree',
  transition: {
    duration: 100,
  },
});

// const n = 12;
const n = 7;

function threeStepsProblem(node, n) {
  let currentNode = null;

  if (!node) {
    currentNode = tree.createNode({ name: n.toString() });
  } else if (node) {
    currentNode = tree.createNode({ name: String(n) });
    node.append(currentNode);
  }

  if (n === 2 || n === 1) {
    return 1;
  }

  return threeStepsProblem(currentNode, n - 1) + threeStepsProblem(currentNode, n - 2);
}

const result = threeStepsProblem(undefined, n);

console.log(result);
