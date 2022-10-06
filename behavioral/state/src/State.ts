import { Context } from "./Context";

export abstract class State {
  protected constructor(protected context: Context) {}

  public abstract insertCard(): void;
  public abstract ejectCard(): void;
  public abstract insertPin(pin: number): void;
  public abstract withdrawCash(amount: number): void;
}
