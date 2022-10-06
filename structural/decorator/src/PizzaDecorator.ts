import { IPizza } from "./IPizza";

export abstract class PizzaDecorator implements IPizza {
  protected constructor(private pizza: IPizza) {}

  public calculatePizza(): number {
    return this.pizza.calculatePizza();
  }
}
