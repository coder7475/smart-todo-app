import type { ErrorRequestHandler } from "express";
import { env } from "@/configs/envConfig";

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	const statusCode: number = err.statusCode ?? 500;
	const message: string = err.message ?? "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		message,
		stack: env.NODE_ENV === "production" ? undefined : err.stack,
	});
};

export default globalErrorHandler;
