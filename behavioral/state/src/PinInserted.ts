import { Context } from "./Context";
import { NoCard } from "./NoCard";
import { NoCash } from "./NoCash";
import { State } from "./State";

export class PinInserted extends State {
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
    console.log("You have already inserted correct PIN");
  }

  public withdrawCash(amount: number): void {
    if (amount > this.context.availableCash) {
      console.log("That amount of cash is not available");
    } else {
      console.log(`You have withdraw ${amount} from the machine`);
      this.context.availableCash -= amount;

      if (this.context.availableCash === 0) {
        this.context.changeState(new NoCash(this.context));
      } else {
        console.log("Card ejected");
        this.context.changeState(new NoCard(this.context));
      }
    }
  }
}
