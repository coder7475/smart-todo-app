import { z } from "zod";

export const TaskSchema = z.object({
    tasks: z.array(z.string()).min(1, "At least one task is required"),
})