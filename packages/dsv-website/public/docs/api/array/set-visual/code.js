const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
});

array.setVisual(0, '#edafda');
array.removeVisual();

array.setVisual([0, 1], '#ffdd00');
array.removeVisual();

array.setVisual([0, 1], ['#edafda', '#ffdd00']);
array.removeVisual();
