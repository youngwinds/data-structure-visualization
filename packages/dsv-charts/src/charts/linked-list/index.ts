import { Selection } from 'd3';
import { merge } from 'lodash';
import { Cartesian2Layout } from '@dsv-charts/components';
import { BaseChart } from '@dsv-charts/charts/base';
import {
  LinkedListConfigType,
  LinkedListThemeType,
  LinkedListDataType,
  LinkedNodeType,
} from './type';
import { defaultConfig, defaultTheme } from './default';

class LinkedListChart extends BaseChart<
  LinkedListConfigType,
  LinkedListThemeType,
  LinkedListDataType
> {
  layout: Cartesian2Layout;
  nodeGroup: Selection<SVGGElement, unknown, null, undefined>;
  arrowGroup: Selection<SVGGElement, unknown, null, undefined>;

  constructor(
    selector: string | HTMLElement,
    config: LinkedListConfigType,
    theme: LinkedListThemeType
  ) {
    super(
      selector,
      merge({}, defaultConfig, config),
      merge({}, defaultTheme, theme)
    );

    this.layout = this.initLayout();
    this.initGroup();
  }

  initLayout(): Cartesian2Layout {
    return new Cartesian2Layout(super.getDom(), super.getConfigByKey('layout'));
  }

  initGroup(): void {
    this.nodeGroup = this.layout.addGroup();
    this.arrowGroup = this.layout.addGroup();
  }

  render(data?: LinkedListDataType): this {
    data && super.updateData(data);

    // this.renderScale();
    // this.renderRectGroup();
    // this.renderTextGroup();

    return this;
  }

  async renderAsync(data?: LinkedListDataType): Promise<true> {
    data && super.updateData(data);

    return await new Promise((resolve) => {
      this.render().transitionEnd(resolve);
    });
  }

  private transitionEnd(resolve) {
    const { duration } = super.getConfigByKey('transition');

    return this.nodeGroup.call((g) => {
      g.transition()
        .duration(duration)
        .on('end', () => {
          resolve(true);
        });
    });
  }

  destroy(): void {
    super.chartWillDestroyed();

    super.destroy();
    super.chartDidDestroyed();
  }
}

export {
  LinkedListChart,
  LinkedListConfigType,
  LinkedListThemeType,
  LinkedListDataType,
  LinkedNodeType,
};
