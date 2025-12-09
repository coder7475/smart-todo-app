import { type Request, type Response, Router } from "express";

const tasksRouter: Router = Router();

tasksRouter.get("/", (_req: Request, res: Response) => {
	res.json({
		status: 200,
		message: "This is users route",
	});
});

export default tasksRouter;
