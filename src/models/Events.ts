type Callback = () => void;

export class Events {
  events: { [event: string]: Callback[] } = {};

  on = (event: string, callback: Callback): void => {
    const handlers = this.events[event] || [];

    handlers.push(callback);

    this.events[event] = handlers;
  };
}
