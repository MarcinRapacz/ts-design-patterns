import { Component } from "./Component";

export class Button extends Component {
  render(): void {
    console.log("Render button");
  }

  click(): void {
    console.log("Button click");

    this.mediator.notify(this, "click");
  }
}
