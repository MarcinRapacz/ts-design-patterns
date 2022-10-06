import { Context } from "./Context";
import { NoCard } from "./NoCard";
import { PinInserted } from "./PinInserted";
import { State } from "./State";

export class CardInserted extends State {
  public constructor(context: Context) {
    super(context);
  }

  public insertCard(): void {
    console.log("You have already inserted a card");
  }

  public ejectCard(): void {
    console.log("Card ejected");
    this.context.changeState(new NoCard(this.context));
  }

  public insertPin(pin: number): void {
    if (pin === 8888) {
      console.log("Correct PIN inserted");
      this.context.changeState(new PinInserted(this.context));
    } else {
      console.log("Incorret Pin inserter");
      this.context.changeState(new NoCard(this.context));
    }
  }

  public withdrawCash(amount: number): void {
    console.log("Insert PIN first");
  }
}
