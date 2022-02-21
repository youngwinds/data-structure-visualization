import { select, Selection } from 'd3-selection';

export class BaseLayout {
  private _dom: HTMLElement;
  private _rootRect: DOMRect;
  private _container: Selection<HTMLElement, unknown, null, undefined>;
  private _svg: Selection<SVGSVGElement, unknown, null, undefined>;

  constructor(dom: HTMLElement) {
    this._dom = dom;

    this.initRect().initContainer().initSvg();
  }

  public destroy() {
    this._svg.remove();
    this._container.remove();

    this._dom = null;
    this._rootRect = null;
    this._container = null;
    this._svg = null;
  }

  /**
   * 初始化Rect
   */
  private initRect() {
    this._rootRect = this._dom.getBoundingClientRect();
    return this;
  }

  /**
   * 初始化svg图表容器
   */
  private initContainer() {
    this._container = select(this._dom)
      .append('div')
      .style('width', this._rootRect.width)
      .style('height', this._rootRect.height)
      .style('position', 'relative');
    return this;
  }

  /**
   * 初始化svg
   */
  private initSvg() {
    this._svg = this._container
      .append('svg')
      .attr('width', this._rootRect.width)
      .attr('height', this._rootRect.height);
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
}
