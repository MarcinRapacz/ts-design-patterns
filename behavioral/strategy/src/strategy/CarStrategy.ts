import { Coordinate } from "../Coordinate";
import { IRouteStrategy } from "../interfaces/IRouteStrategy";

export class CarStrategy implements IRouteStrategy {
  createRoute(start: Coordinate, end: Coordinate): void {
    console.log("car strategy");
  }
}
