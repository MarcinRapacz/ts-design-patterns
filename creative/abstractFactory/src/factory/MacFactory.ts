import { IButton } from "../interfaces/IButton";
import { ITextbox } from "../interfaces/ITextbox";
import { IUIElementFactory } from "../interfaces/IUIElementFactory";
import { MacButton } from "../buttons/MacButton";
import { MacTextbox } from "../textBoxes/MacTextbox";

export class MacFactory implements IUIElementFactory {
  createButton(): IButton {
    return new MacButton();
  }

  createTextbox(): ITextbox {
    return new MacTextbox();
  }
}
