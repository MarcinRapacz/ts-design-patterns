import { BaseHandler } from "./BaseHandler";
import { IHandler } from "../IHandler";
import { RequestContext } from "../RequestContext";

export class ResultHandler extends BaseHandler {
  constructor(next: IHandler) {
    super(next);
  }

  handle(requestContext: RequestContext): void {
    requestContext.response.isSuccessful = true;
    requestContext.response.data = "Some value";
  }
}
