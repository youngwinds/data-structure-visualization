const uuid = (prefix) => {
  return (
    prefix +
    "-" +
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
  );
};

class ArrayProxy {
  constructor(array, options) {
    const id = uuid("ArrayProxy");
    const { snapshotSchema, schema, SchemaBuilder } = options;
    this.options = options;

    snapshotSchema(
      new SchemaBuilder()
        .from(schema)
        .addStructure({
          id: id,
          type: "ArrayProxy",
        })
        .build()
    );

    this.structureId = id;
    this.target = [...array];

    const proxy = new Proxy(this.target, {
      get: (target, prop) => {
        if (prop === "__proxyGet") {
          return (index) => this._getHandler(target, index);
        }
        if (prop === "__proxySet") {
          return (index, value) => this._setHandler(target, index, value);
        }
        if (prop === "__proxyCall") {
          return (method, args) => {
            const fn = target[method];
            return this._applyHandler(fn, target, args, method);
          };
        }
        return this._getHandler(target, prop);
      },
      set: (target, prop, value) => this._setHandler(target, prop, value),
    });
    return proxy;
  }

  _getHandler(target, prop) {
    const { snapshotSchema, schema, SchemaBuilder } = this.options;

    const value = target[prop];
    if (typeof value === "function" && Array.prototype[prop]) {
      return (...args) => {
        const result = value.apply(target, args);

        snapshotSchema(
          new SchemaBuilder()
            .from(schema)
            .addAction(this.structureId, {
              name: "call",
              type: prop,
              args: [...args],
            })
            .build()
        );
        return result;
      };
    }

    if (typeof prop !== "symbol" && !isNaN(prop)) {
      snapshotSchema(
        new SchemaBuilder()
          .from(schema)
          .addAction(this.structureId, {
            name: "get",
            type: "get",
            args: [Number(prop)],
          })
          .build()
      );
    }

    return value;
  }

  _setHandler(target, prop, value) {
    const { snapshotSchema, schema, SchemaBuilder } = this.options;

    const index = Number(prop);
    if (!isNaN(index)) {
      snapshotSchema(
        new SchemaBuilder()
          .from(schema)
          .addAction(this.structureId, {
            name: "set",
            type: "set",
            args: [index, value],
          })
          .build()
      );
    }
    target[prop] = value;
    return true;
  }

  _applyHandler(target, thisArg, args, method) {
    const { snapshotSchema, schema, SchemaBuilder } = this.options;

    const result = target.apply(thisArg, args);
    snapshotSchema(
      new SchemaBuilder()
        .from(schema)
        .addAction(this.structureId, {
          name: "call",
          type: method,
          args: [...args],
        })
        .build()
    );

    if (Array.isArray(result)) {
      return new ArrayProxy(result, this.options);
    }
    return result;
  }
}
