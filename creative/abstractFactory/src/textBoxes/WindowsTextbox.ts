import { ITextbox } from "../interfaces/ITextbox";

export class WindowsTextbox implements ITextbox {
  render(): void {
    console.log("Render windows text box");
  }

  handleInput(): void {
    console.log("Handle windows input");
  }
}
