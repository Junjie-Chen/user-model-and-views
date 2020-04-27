import { Collection } from '../models/Collection';

export abstract class CollectionView {
  constructor(public parent: Element, public collection: Collection) {}

  abstract renderView(parent: Element, model): void;
}
