import { IPizza } from "./IPizza";

export class LargePizza implements IPizza {
  calculatePizza(): number {
    return 30;
  }
}
