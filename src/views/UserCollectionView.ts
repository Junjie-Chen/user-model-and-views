import { CollectionView } from './CollectionView';
import { UserView } from './UserView';
import { User, Properties } from '../models/User';

export class UserCollectionView extends CollectionView<User, Properties> {
  renderView(parent: Element, model: User): void {
    new UserView(parent, model).render();
  }
}
