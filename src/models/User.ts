import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Events } from './Events';

const baseUrl = 'http://localhost:3000/users';

export class User {
  static createUser(data): User {
    return new User(new Attributes(data), new ApiSync(baseUrl), new Events());
  }
}
