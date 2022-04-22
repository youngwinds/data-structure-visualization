export interface IDsBinaryTreeNode {
  name: string;
  value?: string | number;
  state?: string;
  left?: IDsBinaryTreeNode;
  right?: IDsBinaryTreeNode;
  export;
}

export interface IDsBinaryTreeOptions {
  updateHandler: Function;
}

export class DsBinaryTreeNode {
  private _name: string;
  private _value: string | number;
  private _state: string;
  private _left: DsBinaryTreeNode;
  private _right: DsBinaryTreeNode;
  private _updateHandler: Function;

  constructor(props: IDsBinaryTreeNode, options: IDsBinaryTreeOptions) {
    this._name = props.name ?? '';
    this._value = props.value ?? undefined;
    this._state = props.state ?? undefined;
    this._left = props.left ? new DsBinaryTreeNode(props.left, options) : null;
    this._right = props.right
      ? new DsBinaryTreeNode(props.right, options)
      : null;

    this._updateHandler = options.updateHandler;
  }

  /**
   * getters and setters
   */
  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
    this._updateHandler();
  }

  get value() {
    return this._value;
  }

  set value(value: string | number) {
    this._value = value;

    this._updateHandler();
  }

  get left() {
    return this._left;
  }

  set left(left: DsBinaryTreeNode) {
    this._left = left;
    this._updateHandler();
  }

  get right() {
    return this._right;
  }

  set right(right) {
    this._right = right;
    this._updateHandler();
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
    this._updateHandler();
  }
}
