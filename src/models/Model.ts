import { AxiosResponse } from 'axios';

interface Attributes<T> {
  get<K extends keyof T>(property: K): T[K];
  getAll(): T;
  set(value: T): void;
}

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

  save(): void {
    this.sync
      .save(this.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }

  on = this.events.on;

  trigger = this.events.trigger;
}
