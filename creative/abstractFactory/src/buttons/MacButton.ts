import { IButton } from "../interfaces/IButton";

export class MacButton implements IButton {
  render() {
    console.log("Render mac button");
  }

  handleClick() {
    console.log("Handle mac click event");
  }
}
