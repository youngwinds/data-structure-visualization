export type Cartesian2LayoutConfigType = {
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  position?: 'absolute' | 'relative';
  zIndex?: number;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
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
