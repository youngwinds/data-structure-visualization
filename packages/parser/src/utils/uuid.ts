export const uuid = (prefix: string) => {
  return (
    prefix +
    "-" +
    "xxxxxx".replace(/[x]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return r.toString(16);
    })
  );
};
