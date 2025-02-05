export const ArrayProxyString = `
class ArrayProxy {
  constructor(array, schema) {
    this.schema = schema; // 用于记录操作的schema
    this.target = [...array]; // 原始数组的副本

    // 创建Proxy，拦截数组操作
    const proxy = new Proxy(this.target, {
      get: (target, prop) => {
        if (prop === '__proxyGet') {
          return (index) => this._getHandler(target, index);
        }
        if (prop === '__proxySet') {
          return (index, value) => this._setHandler(target, index, value); 
        }
        if (prop === '__proxyCall') {
          return (method, args) => {
            const fn = target[method];
            return this._applyHandler(fn, target, args);
          };
        }
        return this._getHandler(target, prop);
      },
      set: (target, prop, value) => this._setHandler(target, prop, value)
    });
    return proxy;
  }

  // 拦截属性访问（如 arr[0]、arr.push）
  _getHandler(target, prop) {
    const value = target[prop];

    // 拦截数组方法（如 push、pop）
    if (typeof value === "function" && Array.prototype[prop]) {
      return (...args) => {
        const result = value.apply(target, args);
        this.schema.push({ type: "call", method: prop, args: [...args] });
        return result;
      };
    }

    // 拦截索引访问（如 arr[0]）
    if (typeof prop !== "symbol" && !isNaN(prop)) {
      this.schema.push({
        type: "get",
        index: Number(prop),
        value: target[prop],
      });
    }

    return value;
  }

  // 拦截属性赋值（如 arr[0] = 5）
  _setHandler(target, prop, value) {
    const index = Number(prop);
    if (!isNaN(index)) {
      this.schema.push({
        type: "update",
        index,
        oldValue: target[index],
        newValue: value,
      });
    }
    target[prop] = value;
    return true;
  }

  // 拦截函数调用（处理某些特殊方法）
  _applyHandler(target, thisArg, args) {
    // 处理如 arr.concat() 等可能返回新数组的方法
    const result = target.apply(thisArg, args);
    if (Array.isArray(result)) {
      return new ArrayProxy(result, this.schema);
    }
    return result;
  }
}
`