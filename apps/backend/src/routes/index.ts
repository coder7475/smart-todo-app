import { type Request, type Response, Router } from "express";

const indexRouter: Router = Router();

indexRouter.get("/", (_req: Request, res: Response) => {
	res.send("Hello from Express + TypeScript!");
});

export default indexRouter;
