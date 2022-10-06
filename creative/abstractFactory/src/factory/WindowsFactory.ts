import { IButton } from "../interfaces/IButton";
import { ITextbox } from "../interfaces/ITextbox";
import { IUIElementFactory } from "../interfaces/IUIElementFactory";
import { WindowsButton } from "../buttons/WindowsButton";
import { WindowsTextbox } from "../textBoxes/WindowsTextbox";

export class WindowsFactory implements IUIElementFactory {
  createButton(): IButton {
    return new WindowsButton();
  }

  createTextbox(): ITextbox {
    return new WindowsTextbox();
  }
}
