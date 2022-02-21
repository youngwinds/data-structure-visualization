import { ILayoutConfig } from '@dsv-charts/typings/IConfig';
import { BaseLayout } from './base';

type Cartesian2Rect = {
  width: number;
  height: number;
  center: [number, number];
  left: number;
  right: number;
  top: number;
  bottom: number;
};

type Cartesian2InnerRect = {
  innerWidth: number;
  innerHeight: number;
  innerCenter: [number, number];
  innerLeft: number;
  innerRight: number;
  innerTop: number;
  innerBottom: number;
};

export class Cartesian2Layout extends BaseLayout {
  private _config: ILayoutConfig;
  private _cartesian2Rect: Cartesian2Rect;
  private _cartesian2InnerRect: Cartesian2InnerRect;
  constructor(dom: HTMLElement, config: ILayoutConfig) {
    super(dom);

    this._config = config;

    this.calculateRect().calculateInnerRect();
  }

  /**
   * 释放接口
   */
  public destroy(): void {
    super.destroy();

    this._config = null;
    this._cartesian2Rect = null;
    this._cartesian2InnerRect = null;
  }

  /**
   * 计算视图区域
   */
  private calculateRect() {
    const rootRect = this.getRootRect();

    this._cartesian2Rect = {
      top: 0,
      right: rootRect.width,
      bottom: rootRect.height,
      left: 0,
      width: rootRect.width,
      height: rootRect.height,
      center: [rootRect.width / 2, rootRect.height / 2],
    };

    return this;
  }

  /**
   * 计算移除padding后的图表区域
   */
  private calculateInnerRect() {
    const rootRect = this.getRootRect();
    const { padding } = this._config;

    const width = rootRect.width - padding.left - padding.right;
    const height = rootRect.height - padding.top - padding.bottom;

    this._cartesian2InnerRect = {
      innerTop: padding.top,
      innerRight: padding.left + rootRect.width,
      innerBottom: padding.top + rootRect.height,
      innerLeft: padding.left,
      innerWidth: width,
      innerHeight: height,
      innerCenter: [padding.left + width / 2, padding.top + height / 2],
    };

    return this;
  }

  /**
   * getters
   */
  public getRect() {
    return this._cartesian2Rect;
  }

  public getInnerRect() {
    return this._cartesian2InnerRect;
  }
}
