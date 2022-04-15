const code = `const tree = dsv.create({
  type: 'tree'
});

const data = {
  name: '1',
  children: [
    {
      name: '2',
      children: [
        { name: '3' },
        { name: '4' },
        {
          name: '5', children: [
            {
              name: '6',
              children: [
                { name: '7' },
                { name: '8' },
                { name: '9' },
              ]
            }
          ]
        },
      ]
    },
    {
      name: '10',
      children: [
        { name: '11' },
        { name: '12' },
        { name: '13' },
      ]
    },

  ]
}

const root = tree.createTree(data);

const dfs = (node) => {
  if (!node) {
    return;
  }
  if (!node.children) {
    return;
  }

  node.setVisual('#edafda')

  if (node.children.length > 1)
    node.reverse();

  for (let ch of node.children) {
    if (ch.children && ch.children.length !== 0) {
      dfs(ch)
    }
  }
}

dfs(root)
`;

module.exports = {
  'zh-CN': '翻转多叉树',
  'en-US': 'Reverse Muiltiple Tree',
  code: code,
  path: '/docs/data-structure/tree/reverse-muiliple-tree',
};
