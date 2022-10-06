import { Coordinate } from "../Coordinate";
import { IRouteStrategy } from "../interfaces/IRouteStrategy";

export class WalkStrategy implements IRouteStrategy {
  createRoute(start: Coordinate, end: Coordinate): void {
    console.log("walk strategy");
  }
}
