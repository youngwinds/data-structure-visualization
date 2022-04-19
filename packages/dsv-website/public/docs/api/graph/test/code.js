const nodes = new Array(9).fill(0).map((_, i) => {
  return {
    name: `${i}`,
  };
});

const links = [];

for (let i = 1; i < nodes.length; i++) {
  links.push({
    source: nodes[i - 1].name,
    target: nodes[i].name,
  });
}

const graph = dsv.create({
  type: 'graph',
  data: {
    nodes: nodes,
    links: links,
  },
});

graph.render();
