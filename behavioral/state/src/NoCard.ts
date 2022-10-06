import { CardInserted } from "./CardInserted";
import { Context } from "./Context";
import { State } from "./State";

export class NoCard extends State {
  public constructor(context: Context) {
    super(context);
  }

  public insertCard(): void {
    console.log("Card inserted");
    this.context.changeState(new CardInserted(this.context));
  }

  public ejectCard(): void {
    console.log("No card inserted yet");
  }

  public insertPin(pin: number): void {
    console.log("No card inserted yet");
  }

  public withdrawCash(amount: number): void {
    console.log("No card inserted yet");
  }
}
