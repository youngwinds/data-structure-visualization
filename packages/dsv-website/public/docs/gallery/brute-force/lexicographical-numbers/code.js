const array = dsv.create(
  {
    type: 'array',
    data: [],
    layout: {
      padding: {
        top: 20,
      },
      height: 100,
    },
    transition: {
      duration: 300,
    },
  },
  {
    text: {
      size: 14,
    },
  },
);

const tree = dsv.create({
  type: 'tree',
  layout: {
    height: 400,
  },
  transition: {
    duration: 300,
  },
});

const root = tree.createNode({ name: 'root' });

function dfs(current, n, parent) {
  if (current > n) return;

  const node = tree.createNode({ name: String(current) });
  parent.append(node);

  array.push(current);

  for (let i = 0; i <= 9; i++) {
    dfs(current * 10 + i, n, node);
  }
}

const targetN = 17;

for (let i = 1; i <= 9; i++) {
  dfs(i, targetN, root);
}
