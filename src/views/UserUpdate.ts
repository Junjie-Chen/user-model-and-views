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

  eventsMap(): { [eventProperty: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick,
      'click:.save-user': this.onSaveUserClick
    };
  }
}
