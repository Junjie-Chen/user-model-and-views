import { View } from './View';
import { User, Properties } from '../models/User';

export class UserDetail extends View<User, Properties> {
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
