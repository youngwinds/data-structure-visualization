const code = `const tree = dsv.create({
  type: 'tree'
});

const data = {
  name: '1',
  children: [
    {
      name: '2',
      children: [
        {
          name: '3', children: [
            {
              name: '4',
              children: [
                { name: '5' }
              ]
            },
            {
              name: '6'
            },

          ]
        },
        {
          name: '7', children: [
            {
              name: '8'
            }
          ]
        },
      ]
    },
    {
      name: '9',
      children: [
        { name: '10' },
        {
          name: '11',
          children: [
            { name: '12' },
            { name: '13' },
            { name: '14' }
          ]
        }
      ]
    }
  ]
}

const generate = (node, data) => {

  for (const { name, children } of data) {
    const newNode = tree.createNode({ name });
    node.append(newNode);
    if (children)
      generate(newNode, children);
  }
}

const root = tree.createNode({ name: data.name });
generate(root, data.children)
`;

module.exports = {
  'zh-CN': '2-创建多叉树',
  'en-US': '2-Generate Muiltiple Tree',
  code: code,
};
