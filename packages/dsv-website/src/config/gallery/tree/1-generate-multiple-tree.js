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

const generate = (data) => {
  if (!data) {
    return null;
  }
  const node = tree.createNode({ name: data.name });

  if (data.children) {
    for (let childData of data.children) {
      node.append(generate(childData))
    }
  }

  return node;
}

const root = generate(data)`;

module.exports = {
  'zh-CN': '1-创建多叉树',
  'en-US': '1-Generate Muiltiple Tree',
  code: code,
};
