import { prioritizeResponseSchema } from "@/tasks/tasks.schema";
import { PrioritizedTask } from "@/tasks/tasks.types";
import z from "zod";

/**
 * Validate AI response against schema
 */
export const validateResponse = (response: unknown): PrioritizedTask[] => {
  try {
    return prioritizeResponseSchema.parse(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Gemini response validation errors:', error.errors);
      throw new Error('Gemini response validation failed');
    }
    throw error;
  }
};

/**
 * Ensure all original tasks are present in response
 */
export const ensureAllTasks = (
  original: string[],
  prioritized: PrioritizedTask[]
): PrioritizedTask[] => {
  const responseTaskSet = new Set(prioritized.map(t => t.task));
  const missing = original.filter(t => !responseTaskSet.has(t));

  if (missing.length > 0) {
    console.warn('Adding missing tasks with default priority:', missing);
    
    const defaults: PrioritizedTask[] = missing.map(task => ({
      task,
      priority: 'Medium',
      category: 'Other',
    }));

    return [...prioritized, ...defaults];
  }

  return prioritized;
};