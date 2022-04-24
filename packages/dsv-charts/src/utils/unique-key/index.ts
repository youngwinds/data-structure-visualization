export class UniqueKey {
  static key = 0;

  static generate() {
    return String(++this.key);
  }
}
