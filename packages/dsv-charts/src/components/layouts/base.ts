import { Cartesian2LayoutConfigType } from '@dsv-charts/types';
import { select, Selection } from 'd3-selection';

export class BaseLayout {
  private _dom: HTMLElement;
  private _config: Cartesian2LayoutConfigType;
  private _rootRect: DOMRect;
  private _container: Selection<HTMLElement, unknown, null, undefined>;
  private _svg: Selection<SVGSVGElement, unknown, null, undefined>;

  constructor(dom: HTMLElement, config: Cartesian2LayoutConfigType) {
    this._dom = dom;
    this._config = config;

    this.initContainer();
    this.initRect();
    this.initSvg();
  }

  public addGroup() {
    return this._svg.append('g');
  }

  private initRect() {
    this._rootRect = this._container.node().getBoundingClientRect();
    return this;
  }

  /**
   * 初始化svg图表容器
   */
  private initContainer() {
    const height =
      this._config.height ?? this._dom.getBoundingClientRect().height;
    const width = this._config.width ?? this._dom.getBoundingClientRect().width;
    const zIndex = this._config.zIndex ?? 1;
    const position = this._config.position ?? 'relative';

    const top = this._config.top ?? 0;
    const right = this._config.right ?? 0;
    const bottom = this._config.bottom ?? 0;
    const left = this._config.left ?? 0;

    this._container = select(this._dom)
      .append('div')
      .style('height', `${height}px`)
      .style('width', `${width}px`)
      .style('position', position)
      .style('z-index', zIndex)
      .style('top', top ? `${top}px` : undefined)
      .style('right', right ? `${right}px` : undefined)
      .style('bottom', bottom ? `${bottom}px` : undefined)
      .style('left', left ? `${left}px` : undefined);

    return this;
  }

  /**
   * 初始化svg
   */
  private initSvg() {
    this._svg = this._container
      .append('svg')
      .attr('viewBox', [0, 0, this._rootRect.width, this._rootRect.height])
      .attr('width', this._rootRect.width)
      .attr('height', this._rootRect.height)
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

    return this;
  }

  /**
   * getters
   */
  public getSvg() {
    return this._svg;
  }

  public getContainer() {
    return this._container;
  }

  public getRootRect() {
    return this._rootRect;
  }

  public destroy() {
    this._svg.remove();
    this._container.remove();

    this._dom = null;
    this._rootRect = null;
    this._container = null;
    this._svg = null;
  }
}
