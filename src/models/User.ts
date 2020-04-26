import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Events } from './Events';
import { Collection } from './Collection';

export interface Properties {
  id?: number;
  name?: string;
  age?: number;
}

const baseUrl = 'http://localhost:3000/users';

export class User extends Model {
  static createUser(data): User {
    return new User(new Attributes(data), new ApiSync(baseUrl), new Events());
  }

  static createUserCollection(): Collection {
    return new Collection(baseUrl, User.createUser);
  }

  setAge(): void {
    const age = Math.round(Math.random() * 100);

    this.set({ age });
  }
}
