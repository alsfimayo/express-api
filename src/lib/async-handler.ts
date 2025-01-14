import type { NextFunction, Request, Response, RequestHandler } from "express";

// Constrain RequestType to extend Request
type AsyncHandler<RequestType extends Request = Request> = (
  req: RequestType,
  res: Response,
  next: NextFunction,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
) => Promise<any>;

export const asyncHandler = <RequestType extends Request = Request>(
  requestHandler: AsyncHandler<RequestType>,
): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req as RequestType, res, next)).catch(next);
  };
};
