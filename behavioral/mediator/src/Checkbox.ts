import { Component } from "./Component";

export class Checkbox extends Component {
  select(): void {
    console.log("Checkbox selected");

    this.mediator.notify(this, "selected");
  }

  saveValue(): void {
    console.log("Checkbox value save");
  }
}
