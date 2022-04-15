const code = `const stairsSize = 10;

const dp = dsv.create({
  type: 'array',
  data: new Array(stairsSize).fill(0)
});

dp.set(0, 1)
dp.set(1, 2)
dp.set(2, 4)

for (let i = 3; i < stairsSize; i++) {
  dp.set(i, dp.get(i - 1) + dp.get(i - 2) + dp.get(i - 3));
}
`;

module.exports = {
  'zh-CN': '三步问题',
  'en-US': 'Three Steps Problem',
  code: code,
  path: '/docs/gallery/dynamic-programming/three-steps-problem',
};
