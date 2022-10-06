import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";
import { ShapeType } from "./ShapeType";

export class ShapeFactory {
  public createShape(type: ShapeType): Shape {
    switch (type) {
      case ShapeType.Circle: {
        return new Circle();
      }
      case ShapeType.Rectangle: {
        return new Rectangle();
      }
      case ShapeType.Triangle: {
        return new Triangle();
      }
    }
  }
}
