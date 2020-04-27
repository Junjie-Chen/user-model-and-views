import { User } from './models/User';
import { UserView } from './views/UserView';

const root = document.getElementById('root');

if (root) {
  const user = User.createUser({ name: 'Jingyan Li', age: 27 });

  new UserView(root, user).render();
}
