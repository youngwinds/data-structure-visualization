import { BaseLayout } from './base';

export type Cartesian2LayoutConfigType = {
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

export type Cartesian2Rect = {
  width: number;
  height: number;
  center: [number, number];
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export type Cartesian2InnerRect = {
  innerWidth: number;
  innerHeight: number;
  innerCenter: [number, number];
  innerLeft: number;
  innerRight: number;
  innerTop: number;
  innerBottom: number;
};

export class Cartesian2Layout extends BaseLayout {
  private _cartesian2Rect: Cartesian2Rect;
  private _cartesian2InnerRect: Cartesian2InnerRect;

  constructor(dom: HTMLElement, config: Cartesian2LayoutConfigType) {
    super(dom);

    this.calculateRect().calculateInnerRect(config);
  }

  /**
   * 更新接口
   */
  public render(config: Cartesian2LayoutConfigType) {
    this.calculateRect().calculateInnerRect(config);
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
  private calculateInnerRect(config: Cartesian2LayoutConfigType) {
    const rootRect = this.getRootRect();
    const { padding } = config;

    const width = rootRect.width - padding.left - padding.right;
    const height = rootRect.height - padding.top - padding.bottom;

    this._cartesian2InnerRect = {
      innerTop: padding.top,
      innerRight: padding.left + width,
      innerBottom: padding.top + height,
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

  /**
   * 释放接口
   */
  public destroy(): void {
    super.destroy();

    this._cartesian2Rect = null;
    this._cartesian2InnerRect = null;
  }
}
