import { type Request, type Response, Router } from "express";

const indexRouter: Router = Router();

indexRouter.get("/", (_req: Request, res: Response) => {
	res.send("Hello from Smart todo App!");
});

indexRouter.get("/health", (_req: Request, res: Response) => {
	res.status(200).json({ status: "OK", message: "Service is healthy" });
});



export default indexRouter;
