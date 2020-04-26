export abstract class View {
  regions: { [regionProperty: string]: Element } = {};

  constructor(public parent: Element) {}
}
