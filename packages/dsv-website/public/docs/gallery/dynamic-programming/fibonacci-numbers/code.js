const dp = dsv.create({
  type: 'array',
  data: [],
  transition: {
    duration: 100,
  },
});

dp.push(1, 1);

// const n = 12;
const n = 7;

for (let i = 2; i < n; i++) {
  dp.push(dp.get(i - 1) + dp.get(i - 2));
}
