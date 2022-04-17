const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
  state: {
    customName: '#edafda',
    otherState: '#ffdd00',
  },
});

array.setState(0, 'customName');

array.setState(1, 'otherState');
