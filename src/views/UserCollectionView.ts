import { CollectionView } from './CollectionView';
import { UserView } from './UserView';
import { User } from '../models/User';

export class UserCollectionView extends CollectionView {
  renderView(parent: Element, model: User): void {
    new UserView(parent, model).render();
  }
}
