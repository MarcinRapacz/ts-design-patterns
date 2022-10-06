import { Context } from "./Context";
import { State } from "./State";

export class NoCash extends State {
  public constructor(context: Context) {
    super(context);
  }

  public insertCard(): void {
    console.log("Sorry, we are out of cash");
  }

  public ejectCard(): void {
    console.log("Sorry, we are out of cash");
  }

  public insertPin(pin: number): void {
    console.log("Sorry, we are out of cash");
  }

  public withdrawCash(amount: number): void {
    console.log("Sorry, we are out of cash");
  }
}
