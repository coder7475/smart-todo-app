export interface PrioritizeRequest {
  tasks: string[];
}

export interface PrioritizedTask {
  task: string;
  priority: 'High' | 'Medium' | 'Low';
  category: string;
}

export type PrioritizeResponse = PrioritizedTask[];
