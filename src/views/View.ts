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

  abstract template(): string;

  onRender(): void {}

  regionsMap(): { [regionProperty: string]: string } {
    return {};
  }

  mapRegions(fragment: DocumentFragment): void {
    const mapRegions = this.regionsMap();

    for (let regionProperty in mapRegions) {
      const element = fragment.querySelector(mapRegions[regionProperty]);

      if (element) {
        this.regions[regionProperty] = element;
      }
    }
  }

  eventsMap(): { [eventProperty: string]: () => void } {
    return {};
  }
}
