import { ISubscriber } from "./ISubscriber";

export class Publisher {
  private subscribers: ISubscriber[] = [];

  subscribe(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: ISubscriber): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  norify(context: string): void {
    this.subscribers.forEach((subscriber) => subscriber.update(context));
  }
}
