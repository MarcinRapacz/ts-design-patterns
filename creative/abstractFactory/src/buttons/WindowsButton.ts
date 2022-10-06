import { IButton } from "../interfaces/IButton";

export class WindowsButton implements IButton {
  render() {
    console.log("Render windows button");
  }

  handleClick() {
    console.log("Handle windows click event");
  }
}
