import { NoCard } from "./NoCard";
import { State } from "./State";

export class Context {
  private currentState: State;
  public availableCash: number = 2000;

  constructor() {
    this.currentState = new NoCard(this);
  }

  public insertCard() {
    this.currentState.insertCard();
  }

  public ejectCart() {
    this.currentState.ejectCard();
  }

  public insertPin(pin: number) {
    this.currentState.insertPin(pin);
  }

  public withdrawCash(amount: number) {
    this.currentState.withdrawCash(amount);
  }

  public changeState(state: State) {
    this.currentState = state;
  }
}
