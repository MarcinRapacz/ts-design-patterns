import { Border } from "./Border";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(x: number, y: number, border: Border) {
    super(x, y, border);
  }
  render() {
    console.log("Render Triangle");
  }
  clone() {
    return new Triangle(this.x, this.y, {
      color: this.border.color,
      size: this.border.size,
    });
  }
}
