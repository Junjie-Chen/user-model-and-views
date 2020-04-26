export class Model {
  constructor(private attributes, private sync, private events) {}

  get = this.attributes.get;
}
