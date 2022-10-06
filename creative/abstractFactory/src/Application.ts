import { IUIElementFactory } from "./interfaces/IUIElementFactory";
export class Application {
  constructor(private elementFactory: IUIElementFactory) {}

  public renderUI() {
    const button = this.elementFactory.createButton();
    button.render();

    const textBox = this.elementFactory.createTextbox();
    textBox.render();
  }
}
