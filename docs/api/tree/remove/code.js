const tree = dsv.create({
  type: 'tree',
});

const Root = tree.createNode({ name: 'Root', value: 1 });
const A = tree.createNode({ name: 'A', value: 1 });
const B = tree.createNode({ name: 'B', value: 1 });
const C = tree.createNode({ name: 'C', value: 1 });
const D = tree.createNode({ name: 'D', value: 1 });
const E = tree.createNode({ name: 'E', value: 1 });
const F = tree.createNode({ name: 'F', value: 1 });
const G = tree.createNode({ name: 'G', value: 1 });

Root.append(A).append(B).append(C).append(D);

A.append(E);
A.append(F);
A.append(G, B);

G.remove();
F.remove();
E.remove();
D.remove();
C.remove();
B.remove();
A.remove();
