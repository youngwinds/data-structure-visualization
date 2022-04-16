const code = `const tree = dsv.create({
  type: 'tree'
})

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

root.reverse();
`;

module.exports = {
  'zh-CN': 'reverse',
  'en-US': 'reverse',
  path: '/docs/api/tree/reverse',
};
