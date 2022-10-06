import { IHandler } from "../IHandler";
import { RequestContext } from "../RequestContext";

export abstract class BaseHandler implements IHandler {
  protected constructor(protected next: IHandler) {}

  abstract handle(requestContext: RequestContext): void;
}
