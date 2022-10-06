import { RequestContext } from "./RequestContext";

export interface IHandler {
  handle(requestContext: RequestContext): void;
}
