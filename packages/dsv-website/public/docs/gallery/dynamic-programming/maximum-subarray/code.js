const targetArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const nums = dsv.create({
  type: 'array',
  data: targetArray,
  transition: {
    duartion: 100,
  },
  layout: {
    height: 250,
  },
});

const dp = dsv.create({
  type: 'array',
  data: new Array(targetArray.length).fill(0),
  transition: {
    duartion: 100,
  },
  layout: {
    height: 250,
  },
});

function maxSubArray() {
  let result = -Infinity;
  let resultIndex = -1;
  dp.set(0, nums.get(0));
  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums.get(i);
    const currentMax = Math.max(currentNum, dp.get([i - 1]) + currentNum);
    dp.set(i, currentMax);

    if (result < currentMax) {
      result = currentMax;
      resultIndex = i;
    }
  }

  if (resultIndex !== -1) {
    dp.setVisual(resultIndex, '#edafda');
  }
}

maxSubArray();
