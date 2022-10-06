import { IRouteStrategy } from "./interfaces/IRouteStrategy";
import { Coordinate } from "./Coordinate";

export class GoogleMap {
  constructor(private strategy: IRouteStrategy) {}

  createRoute(start: Coordinate, stop: Coordinate) {
    this.strategy.createRoute(start, stop);
  }
}
