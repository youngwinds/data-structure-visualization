export interface IAction {
  /**
   * @description 动作类型
   */
  type: string;

  /**
   * @description 动作所属的数据结构id
   */
  structureId: string;

  /**
   * @description 动作参数
   */
  payload?: Payload;
}

interface Payload {
  values: any[];
}
