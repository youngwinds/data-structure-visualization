const A = dsv.create({
  type: 'stack',
  data: [4, 3, 2, 1, 0],
  layout: {
    padding: {
      left: 0,
      right: 0,
      bottom: 50,
      top: 50,
    },
    position: 'absolute',
    width: 150,
    left: 50,
  },
});

const B = dsv.create({
  type: 'stack',
  data: [],
  layout: {
    padding: {
      left: 0,
      right: 0,
      bottom: 50,
      top: 50,
    },
    position: 'absolute',
    width: 150,
    left: 250,
  },
});

const C = dsv.create({
  type: 'stack',
  data: [],
  layout: {
    padding: {
      left: 0,
      right: 0,
      bottom: 50,
      top: 50,
    },
    position: 'absolute',
    width: 150,
    left: 450,
  },
});

const n = [4, 3, 2, 1, 0].length;

const move = (n, a, b, c) => {
  if (n === 1) {
    c.push(a.pop());
    return;
  }
  // 将A中的n-1个移动到B
  move(n - 1, a, c, b);
  // 将A剩余的一个移动到C
  c.push(a.pop());
  // 将B中的n-1个移动到C
  move(n - 1, b, a, c);
};

move(n, A, B, C);
