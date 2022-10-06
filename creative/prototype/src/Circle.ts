import { Border } from "./Border";
import { Shape } from "./Shape";

export class Circle extends Shape {
  constructor(x: number, y: number, border: Border) {
    super(x, y, border);
  }

  render() {
    console.log("Render Circle", this);
  }

  clone() {
    return new Circle(this.x, this.y, {
      color: this.border.color,
      size: this.border.size,
    });
  }
}
