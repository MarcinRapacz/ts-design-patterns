import { GoogleMap } from "./GoogleMap";
import { BikeStrategy } from "./strategy/BikeStrategy";
import { WalkStrategy } from "./strategy/WalkStrategy";
import { CarStrategy } from "./strategy/CarStrategy";

const map = new GoogleMap(new BikeStrategy());
map.createRoute({ lat: 10, long: 20 }, { lat: 30, long: 40 });
