import { IPizza } from "./IPizza";

export class MediumPizza implements IPizza {
  calculatePizza(): number {
    return 20;
  }
}
