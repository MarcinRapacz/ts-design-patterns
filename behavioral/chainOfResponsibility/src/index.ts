import { AuthorizationHandler } from "./handlers/AuthorizationHandler";
import { IHandler } from "./IHandler";
import { Request, RequestContext, Response } from "./RequestContext";
import { ResultHandler } from "./handlers/ResultHandler";
import { ValidationHandler } from "./handlers/ValidationHandler";

const requestContext = new RequestContext();
requestContext.request = new Request();
requestContext.response = new Response();

requestContext.request.entityId = 101;
requestContext.request.userId = 14;
requestContext.request.userRole = "User";

const resultHandler = new ResultHandler({} as IHandler);
const validationHandler = new ValidationHandler(resultHandler);
const authorizationHandler = new AuthorizationHandler(validationHandler);

authorizationHandler.handle(requestContext);

console.log({ requestContext });
