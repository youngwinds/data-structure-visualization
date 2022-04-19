import { Selection } from 'd3';
import { Cartesian2Layout } from '@dsv-charts/components';
import { merge } from 'lodash';
import { BaseChart } from '@dsv-charts/charts/base';
import { GraphConfigType, GraphThemeType, GraphDataType } from './type';

import { defaultConfig, defaultTheme } from './default';

class GraphChart extends BaseChart<
  GraphConfigType,
  GraphThemeType,
  GraphDataType
> {
  layout: Cartesian2Layout;

  nodesGroup: Selection<SVGGElement, unknown, null, undefined>;
  linksGroup: Selection<SVGGElement, unknown, null, undefined>;
  textsGroup: Selection<SVGGElement, unknown, null, undefined>;

  constructor(
    selector: string | HTMLElement,
    config: GraphConfigType,
    theme: GraphThemeType
  ) {
    super(
      selector,
      merge({}, defaultConfig, config),
      merge({}, defaultTheme, theme)
    );
    this.layout = this.initLayout();
    this.initGroup();
    super.chartDidChartInit();
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.nodesGroup = this.layout.addGroup();
    this.linksGroup = this.layout.addGroup();
    this.textsGroup = this.layout.addGroup();
  }
}

export { GraphChart, GraphConfigType, GraphThemeType, GraphDataType };
