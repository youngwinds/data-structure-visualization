import { registerChart, ArrayChart, StackTree, TreeChart } from './charts';
registerChart('array', ArrayChart);
registerChart('stack', StackTree);
registerChart('tree', TreeChart);

export { DsvChart } from './core';
