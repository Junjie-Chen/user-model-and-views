export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(property: K): T[K] => {
    return this.data[property];
  };

  getAll = (): T => {
    return this.data;
  };

  set(value: T): void {
    Object.assign(this.data, value);
  }
}
