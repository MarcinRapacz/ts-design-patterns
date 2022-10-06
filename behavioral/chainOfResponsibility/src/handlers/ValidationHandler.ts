import { BaseHandler } from "./BaseHandler";
import { IHandler } from "../IHandler";
import { RequestContext } from "../RequestContext";

export class ValidationHandler extends BaseHandler {
  constructor(next: IHandler) {
    super(next);
  }

  handle(requestContext: RequestContext): void {
    if (requestContext.request.entityId > 100) {
      return this.next.handle(requestContext);
    }

    requestContext.response.isSuccessful = false;
    requestContext.response.message =
      "Validation error:  Entity ID must be greater than 100";
  }
}
