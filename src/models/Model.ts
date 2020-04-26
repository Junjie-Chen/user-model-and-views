import { AxiosResponse } from 'axios';

export class Model {
  constructor(private attributes, private sync, private events) {}

  get = this.attributes.get;

  getAll = this.attributes.getAll;

  set(value): void {
    this.attributes.set(value);

    this.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('fetch was not successful without an id');
    }

    this.sync
      .fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
