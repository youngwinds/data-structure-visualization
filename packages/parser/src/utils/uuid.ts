export const uuid = (prefix: string, hashSource: string) => {
  if (hashSource) {
    let hash = 0;
    for (let i = 0; i < hashSource.length; i++) {
      hash = (hash << 5) - hash + hashSource.charCodeAt(i);
      hash |= 0; // 转换为32位整数
    }

    return prefix + hash;
  }
  return (
    prefix +
    "-" +
    "xxxxxx".replace(/[x]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return r.toString(16);
    })
  );
};
