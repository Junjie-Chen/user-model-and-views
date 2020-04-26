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

export class User extends Model<Properties> {
  static createUser(data: Properties): User {
    return new User(new Attributes<Properties>(data), new ApiSync<Properties>(baseUrl), new Events());
  }

  static createUserCollection(): Collection<User, Properties> {
    return new Collection<User, Properties>(baseUrl, User.createUser);
  }

  setAge(): void {
    const age = Math.round(Math.random() * 100);

    this.set({ age });
  }
}
