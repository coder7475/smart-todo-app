import type { RequestHandler } from "express";

const notFoundRoute: RequestHandler = (_req, res) => {
	res.status(404).send("Not Found");
};

export default notFoundRoute;
