export class Model {
  constructor(private attributes, private sync, private events) {}

  get = this.attributes.get;

  getAll = this.attributes.getAll;

  set(value): void {
    this.attributes.set(value);

    this.trigger('change');
  }
}
