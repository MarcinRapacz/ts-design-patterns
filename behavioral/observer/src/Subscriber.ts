import { ISubscriber } from "./ISubscriber";

export class Subscriber implements ISubscriber {
  constructor(public name: string) {}

  update(context: string): void {
    console.log(`Subscriber ${this.name} notified: ${context}`);
  }
}
