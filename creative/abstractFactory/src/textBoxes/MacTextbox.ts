import { ITextbox } from "../interfaces/ITextbox";

export class MacTextbox implements ITextbox {
  render(): void {
    console.log("Render mac text box");
  }

  handleInput(): void {
    console.log("Handle mac input");
  }
}
