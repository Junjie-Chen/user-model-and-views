export class Attributes {
  constructor(private data) {}

  get = property => {
    return this.data[property];
  };

  getAll = () => {
    return this.data;
  };
}
