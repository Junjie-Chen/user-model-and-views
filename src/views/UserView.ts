import { UserDetail } from './UserDetail';
import { UserUpdate } from './UserUpdate';

export class UserView {
  onRender(): void {
    new UserDetail(this.regions.userDetail, this.model).render();

    new UserUpdate(this.regions.userUpdate, this.model).render();
  }

  regionsMap(): { [regionsProperty: string]: string } {
    return {
      'userDetail': '.user-detail',
      'userUpdate': '.user-update'
    };
  }
}
