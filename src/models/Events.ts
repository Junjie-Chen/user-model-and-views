type Callback = () => void;

export class Events {
  events: { [event: string]: Callback[] } = {};
}
