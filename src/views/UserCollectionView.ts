import { UserView } from './UserView';
import { User } from '../models/User';

export class UserCollectionView {
  renderView(parent: Element, model: User): void {
    new UserView(parent, model).render();
  }
}
