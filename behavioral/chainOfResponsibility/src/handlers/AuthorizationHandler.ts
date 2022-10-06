import { BaseHandler } from "./BaseHandler";
import { IHandler } from "../IHandler";
import { RequestContext } from "../RequestContext";

export class AuthorizationHandler extends BaseHandler {
  private entityOwners: Record<number, number> = {
    100: 13,
    101: 14,
  };

  constructor(next: IHandler) {
    super(next);
  }

  handle(requestContext: RequestContext): void {
    if (requestContext.request.userRole === "Admin") {
      return this.next.handle(requestContext);
    }

    const value = this.entityOwners[requestContext.request.entityId];
    if (value === requestContext.request.userId) {
      return this.next.handle(requestContext);
    }

    requestContext.response.isSuccessful = false;
    requestContext.response.message = "User is not authorized";
  }
}
