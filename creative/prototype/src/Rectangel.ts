import { Border } from "./Border";
import { Shape } from "./Shape";

export class Rectangel extends Shape {
  constructor(x: number, y: number, border: Border) {
    super(x, y, border);
  }
  render() {
    console.log("Render Rectangel");
  }
  clone() {
    return new Rectangel(this.x, this.y, {
      color: this.border.color,
      size: this.border.size,
    });
  }
}
