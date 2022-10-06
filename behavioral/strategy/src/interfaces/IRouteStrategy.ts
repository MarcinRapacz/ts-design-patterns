import { Coordinate } from "../Coordinate";

export interface IRouteStrategy {
  createRoute(start: Coordinate, end: Coordinate): void;
}
