import { Schema, SchemaBuilder, StructureType } from "schema";

interface ArrayProxyOptions {
  snapshotSchema: (schema: Schema) => void;
  schema: Schema;
  SchemaBuilder: typeof SchemaBuilder;
  uuid: (prefix: string) => string;
}

export class ArrayProxy {
  structureId: string;
  options: ArrayProxyOptions;
  target: any[];

  constructor(array: any[], options: ArrayProxyOptions) {
    const { snapshotSchema, schema, SchemaBuilder, uuid } = options;
    this.structureId = uuid("array");
    this.options = options;
    snapshotSchema(
      new SchemaBuilder()
        .from(schema)
        .addStructure({
          id: this.structureId,
          type: StructureType.Array,
          array,
        })
        .build()
    );

    this.target = [...array];

    const proxy = new Proxy(this.target, {
      get: (target, prop) => {
        if (prop === "__proxyGet") {
          return (index: number) => this._getHandler(target, index);
        }
        if (prop === "__proxySet") {
          return (index: number, value: any) =>
            this._setHandler(target, index, value);
        }
        if (prop === "__proxyCall") {
          return (method: string, args: any[]) => {
            const fn = target[method as keyof typeof target];
            return this._applyHandler(fn, target, args, method);
          };
        }
        return this._getHandler(target, prop);
      },
      set: (target, prop, value) => this._setHandler(target, prop, value),
    });
    return proxy;
  }

  _getHandler(target: any[], prop: number) {
    const { snapshotSchema, schema, SchemaBuilder } = this.options;

    const value = target[prop];
    if (typeof value === "function" && Array.prototype[prop]) {
      return (...args: any[]) => {
        const result = value.apply(target, args);

        snapshotSchema(
          new SchemaBuilder()
            .from(schema)
            .addAction({
              structureId: this.structureId,
              name: "call",
              type: prop.toString(),
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
          .addAction({
            structureId: this.structureId,
            name: "get",
            type: "get",
            args: [Number(prop)],
          })
          .build()
      );
    }

    return value;
  }

  _setHandler(target: any[], prop: number, value: any) {
    const { snapshotSchema, schema, SchemaBuilder } = this.options;

    const index = Number(prop);
    if (!isNaN(index)) {
      snapshotSchema(
        new SchemaBuilder()
          .from(schema)
          .addAction({
            structureId: this.structureId,
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

  _applyHandler(fn: Function, thisArg: any, args: any[], method: string) {
    const { snapshotSchema, schema, SchemaBuilder } = this.options;

    const result = fn.apply(thisArg, args);
    snapshotSchema(
      new SchemaBuilder()
        .from(schema)
        .addAction({
          structureId: this.structureId,
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
