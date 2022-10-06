import { Border } from "./Border";

export abstract class Shape {
  constructor(public x: number, public y: number, public border: Border) {}

  public abstract render(): void;
  public abstract clone(): Shape;
}
