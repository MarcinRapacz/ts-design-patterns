import { IPizza } from "./IPizza";

export class SmallPizza implements IPizza {
  calculatePizza(): number {
    return 15;
  }
}
