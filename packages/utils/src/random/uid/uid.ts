import { randomBytes } from 'crypto';

/**
 * 生成带前缀的唯一标识符。
 * @param prefix - 前缀字符串, 默认为'uid'。
 * @param separator - 分隔符字符串，默认为“-”。
 * @param hexLength - 以十六进制表示的字节数长度，默认为 10
 * @returns 返回生成的唯一标识符。
 */
export const uid = (
  prefix: string = 'uid',
  separator: string = '-',
  hexLength: number = 10
) => {
  const bytes = randomBytes(Math.ceil(hexLength / 2));
  const hex = bytes.toString('hex').slice(0, hexLength);
  return `${prefix}${separator}${hex}`;
};
