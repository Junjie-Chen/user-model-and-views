import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderView(parent: Element, model: T): void;

  render(): void {
    this.parent.innerHTML = '';

    const template = document.createElement('template');

    for (let model of this.collection.models) {
      const parent = document.createElement('div');

      this.renderView(parent, model);

      template.content.append(parent);
    }

    this.parent.append(template.content);
  }
}
