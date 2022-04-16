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

  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n === 3) {
    return 4;
  }

  return (
    threeStepsProblem(currentNode, n - 1) +
    threeStepsProblem(currentNode, n - 2) +
    threeStepsProblem(currentNode, n - 3)
  );
}

const result = threeStepsProblem(undefined, n);

console.log(result);
