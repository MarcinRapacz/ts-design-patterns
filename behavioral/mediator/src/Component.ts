import { IMediator } from "./IMediator";

export abstract class Component {
  protected mediator: IMediator;

  setMediator(mediator: IMediator) {
    this.mediator = mediator;
  }
}
