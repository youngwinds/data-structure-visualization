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

  public addGroup() {
    return this._svg.append('g').style('border', '1px');
  }

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
