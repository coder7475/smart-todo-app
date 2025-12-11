export type Priority = "High" | "Medium" | "Low";

export type PrioritizedTask = {
  task: string;
  priority: Priority;
  category: string;
};
