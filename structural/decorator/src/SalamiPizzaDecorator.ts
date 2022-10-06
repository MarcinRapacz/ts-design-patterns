import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class SalamiPizzaDecorator extends PizzaDecorator {
  constructor(pizza: IPizza) {
    super(pizza);
  }

  public calculatePizza(): number {
    return super.calculatePizza() + 6.5;
  }
}
