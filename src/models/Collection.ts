import { Events } from './Events';

export class Collection {
  models: [] = [];

  events: Events = new Events();

  constructor(public baseUrl: string, public deserialize) {}
}
