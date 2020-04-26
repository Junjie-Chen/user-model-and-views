import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [regionProperty: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
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

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventProperty in eventsMap) {
      const [event, selector] = eventProperty.split(':');

      fragment.querySelectorAll(selector)
        .forEach((element: Element): void => {
          element.addEventListener(event, eventsMap[eventProperty]);
        });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const template = document.createElement('template');

    template.innerHTML = this.template();

    this.bindEvents(template.content);

    this.mapRegions(template.content);

    this.onRender();

    this.parent.append(template.content);
  }
}
