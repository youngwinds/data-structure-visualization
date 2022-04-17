const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
});

array.sort((a, b) => a - b);

const values = array.sort((a, b) => b - a);

for (let ch of values) {
  array.push(ch.value);
}
