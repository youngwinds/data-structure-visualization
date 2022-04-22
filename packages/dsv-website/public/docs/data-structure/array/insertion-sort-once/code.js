const array = dsv.create({
  type: 'array',
  data: [1, 2, 3, 4, 6, 7, 8, 9, 10, 5],
  state: {
    end: '#edafda',
    inserted: '#ffdd00',
    get: null,
  },
  transition: {
    duration: 100,
  },
});

const i = 9;

const key = array.get(i);
let j = i - 1;

array.setState(i, 'inserted');

while (j >= 0 && array.get(j) > key) {
  array.swap(j + 1, j);
  j = j - 1;
}
