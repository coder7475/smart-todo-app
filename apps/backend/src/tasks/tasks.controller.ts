import { Request, Response,NextFunction } from "express";
import { TaskSchema } from "./tasks.schema";

const prioritizeTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsedBody = TaskSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return res.status(400).json({
                status: 400,
                message: "Invalid request data",
                errors: parsedBody.error.errors,
            });
        }

        const { tasks } = parsedBody.data;
        
        res.json({
		    status: 200,
		    message: "Task prioritized",
		    data: tasks,
	    });
    } catch (error) {
        next(error);
    }
}

export const tasksController = {
    prioritizeTasks,
};