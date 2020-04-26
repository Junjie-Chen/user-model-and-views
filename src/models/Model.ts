import { AxiosPromise, AxiosResponse } from 'axios';

interface Attributes<T> {
  get<K extends keyof T>(property: K): T[K];
  getAll(): T;
  set(value: T): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(event: string, callback: () => void): void;
  trigger(event: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T> {
  constructor(private attributes: Attributes<T>, private sync: Sync<T>, private events: Events) {}

  get = this.attributes.get;

  getAll = this.attributes.getAll;

  set(value: T): void {
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
