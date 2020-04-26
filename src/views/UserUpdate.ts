export class UserUpdate {
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setAge();
  };

  onSaveUserClick = (): void => {
    this.model.save();
  };
}
