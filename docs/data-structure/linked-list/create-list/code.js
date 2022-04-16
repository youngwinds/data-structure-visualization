const linkedList = dsv.create({
  type: 'linkedList',
});

const head = linkedList.createNode({ name: '0', value: 1 });

let temp = head;

const length = 10;

for (let i = 1; i < length; i++) {
  const newNode = linkedList.createNode({ name: String(i), value: 1 });
  temp.link(newNode);
  temp = newNode;
}
