const code = `const tree = dsv.create({
  type: 'tree',
  data: {
    key: 'A',
    name: 'A',
    value: 1,
    children: [
      {
        key: 'B',
        name: 'B',
        value: 1,
        children: [
          {
            key: 'C',
            name: 'C',
            value: 1,
            children: null,
          },
          {
            key: 'D',
            name: 'D',
            value: 1,
            children: null,
          },
        ],
      },
      {
        key: 'E',
        name: 'E',
        value: 1,
        children: [
          {
            key: 'F',
            name: 'F',
            value: 1,
            children: null,
          },
          {
            key: 'G',
            name: 'G',
            value: 1,
            children: null,
          },
        ],
      },
    ],
  },
})

tree.render();`;

module.exports = {
  'zh-CN': 'getNext',
  'en-US': 'getNext',
  code: code,
};
