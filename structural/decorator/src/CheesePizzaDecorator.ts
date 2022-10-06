import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class CheesePizzaDecorator extends PizzaDecorator {
  constructor(pizza: IPizza) {
    super(pizza);
  }

  public calculatePizza(): number {
    return super.calculatePizza() + 4.5;
  }
}
