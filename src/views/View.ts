export abstract class View {
  regions: { [regionProperty: string]: Element } = {};

  constructor(public parent: Element, public model) {
    this.onModelChange();
  }

  onModelChange(): void {
    this.model.on('change', () => {
      this.render();
    });
  }
}
