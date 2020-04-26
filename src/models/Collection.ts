import axios, { AxiosResponse } from 'axios';
import { Events } from './Events';

export class Collection<T, K> {
  models: T[] = [];

  events: Events = new Events();

  constructor(public baseUrl: string, public deserialize: (data: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.baseUrl)
      .then((response: AxiosResponse): void => {
        response.data.forEach((data: K): void => {
          this.models.push(this.deserialize(data));
        });

        this.trigger('change');
      });
  }
}
