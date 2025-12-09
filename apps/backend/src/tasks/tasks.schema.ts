import { z } from "zod";

export const TaskSchema = z.object({
    tasks: z.array(z.string()).min(1, "At least one task is required"),
})


export const prioritizeRequestSchema = z.object({
  tasks: z
    .array(
      z.string()
        .trim()
        .min(1, 'Task cannot be empty')
        .max(500, 'Task is too long (max 500 characters)')
    )
    .min(1, 'At least one task is required')
    .max(100, 'Maximum 100 tasks allowed'),
});

export const prioritizedTaskSchema = z.object({
  task: z.string(),
  priority: z.enum(['High', 'Medium', 'Low']),
  category: z.string(),
});

export const prioritizeResponseSchema = z.array(prioritizedTaskSchema);

export type PrioritizeRequestInput = z.infer<typeof prioritizeRequestSchema>;
export type PrioritizedTaskOutput = z.infer<typeof prioritizedTaskSchema>;
