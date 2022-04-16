// const n = 12;
const n = 7;

const dp = dsv.create({
  type: 'array',
  data: new Array(n).fill(0),
  transition: {
    duartion: 100,
  },
});

dp.set(0, 1);
dp.set(1, 2);
dp.set(2, 4);

for (let i = 3; i < n; i++) {
  dp.set(i, dp.get(i - 1) + dp.get(i - 2) + dp.get(i - 3));
}
