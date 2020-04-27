import { User } from './models/User';
import { UserCollectionView } from './views/UserCollectionView';

const firstUser = User.createUser({ name: 'Jingyan Li', age: 27 });

const secondUser = User.createUser({ name: 'Junjie Chen', age: 30 });

firstUser.save();

secondUser.save();

const userCollection = User.createUserCollection();

const root = document.getElementById('root');

new UserCollectionView(root, userCollection).render();
