const dp = dsv.create({
  type: 'matrix',
  transition: {
    duration: 100,
  },
});

function knapsackProblem(weight, value, maxWeight) {
  dp.createMatrix(
    new Array(weight.length + 1)
      .fill(0)
      .map(() => new Array(maxWeight + 1).fill(0)),
  );

  for (let i = 1; i <= weight.length; i++) {
    const wi = weight[i - 1];
    const vi = value[i - 1];
    for (let j = 1; j <= maxWeight; j++) {
      const current = dp.getItem(i, j);
      current.state = '#edafda';
      if (j - wi < 0) {
        current.value = dp.getItem(i - 1, j).value;
      } else if (j - wi >= 0) {
        current.value = Math.max(
          dp.getItem(i - 1, j).value,
          vi + dp.getItem(i - 1, j - wi).value,
        );
      }
    }
  }
}

const weightArr = [2, 1, 3, 2];
const valueArr = [12, 10, 20, 15];
const maxWeight = 5;

knapsackProblem(weightArr, valueArr, maxWeight);
