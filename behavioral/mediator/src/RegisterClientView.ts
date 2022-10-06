import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Component } from "./Component";
import { IMediator } from "./IMediator";

export class RegisterClientView implements IMediator {
  constructor(private clientType: Checkbox, private submitButton: Button) {
    submitButton.setMediator(this);
    clientType.setMediator(this);
  }

  notify(_component: Component, event: string): void {
    switch (event) {
      case "selected":
        this.submitButton.render();
        break;
      case "click":
        this.clientType.saveValue();
        break;

      default:
        break;
    }
  }
}
