import { IButton } from "./IButton";
import { ITextbox } from "./ITextbox";

export interface IUIElementFactory {
  createButton(): IButton;
  createTextbox(): ITextbox;
}
