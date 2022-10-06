export class Request {
  userRole: string;
  userId: number;
  entityId: number;
}

export class Response {
  isSuccessful: boolean;
  message: string;
  data: Object;
}

export class RequestContext {
  request: Request;
  response: Response;
}
