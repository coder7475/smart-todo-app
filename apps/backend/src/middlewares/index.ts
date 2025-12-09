import type { ErrorRequestHandler, RequestHandler } from "express";
import globalErrorHandler from "./globalErrorHandler";
import notFoundRoute from "./notFoundRoute";

type Middlewares = {
	globalErrorHandler: ErrorRequestHandler;
	notFoundRoute: RequestHandler;
};

export const middlewares: Middlewares = {
	globalErrorHandler,
	notFoundRoute,
};
