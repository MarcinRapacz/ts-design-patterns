import { ShapeFactory } from "./ShapeFactory";
import { ShapeType } from "./ShapeType";

const shapeFactory = new ShapeFactory();

const circle = shapeFactory.createShape(ShapeType.Circle);
const rectangle = shapeFactory.createShape(ShapeType.Rectangle);

circle.render();
rectangle.render();
