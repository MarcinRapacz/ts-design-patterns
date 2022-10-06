import { Coordinate } from "../Coordinate";
import { IRouteStrategy } from "../interfaces/IRouteStrategy";

export class BikeStrategy implements IRouteStrategy {
  createRoute(start: Coordinate, end: Coordinate): void {
    console.log("bike strategy");
  }
}
