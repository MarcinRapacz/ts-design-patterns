import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class HamPizzaDecorator extends PizzaDecorator {
  constructor(pizza: IPizza) {
    super(pizza);
  }

  public calculatePizza(): number {
    return super.calculatePizza() + 5;
  }
}
