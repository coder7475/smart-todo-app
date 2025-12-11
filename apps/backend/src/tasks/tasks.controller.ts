import { Request, Response, NextFunction } from "express";
import { TaskSchema } from "./tasks.schema";
import { tasksServices } from "./tasks.services";

const prioritizeTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Priotize Tasks controller");
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

    const prioritizedTasks = await tasksServices.prioritizeTasks({ tasks });

    res.json({
      status: 200,
      message: "Task prioritized",
      data: prioritizedTasks,
    });
  } catch (error) {
    next(error);
  }
};

export const tasksController = {
  prioritizeTasks,
};
