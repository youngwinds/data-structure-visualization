const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
  // change the state of get()
  // state: {
  //     get: 'red'
  // },
  // remove the state of get()
  // state: {
  //     get: null
  // }
});

array.get(0);

array.get(1);

array.get(2);
