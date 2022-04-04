import { ArrayLike } from '@dsv-charts/re-types';

export function isNumber(value: any): value is number {
  return typeof value === 'number';
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

export function isObject(value: any): value is Object {
  return typeof value === 'object';
}

export function isArray(value: any): value is any[] {
  if (Array.isArray) {
    return Array.isArray(value);
  }
  return Object.toString.call(value) === '[object Array]';
}

export function isArrayLike(value: any): value is ArrayLike<any> {
  if (!value) {
    return false;
  }
  if (typeof value === 'string') {
    return false;
  }
  return typeof value.length === 'number';
}

export function isHTMLElement(value: any): value is HTMLElement {
  return (
    typeof value === 'object' &&
    typeof value.nodeType === 'number' &&
    typeof value.ownerDocument === 'object'
  );
}
