/**
 * Build the prompt for Gemini
 */
export const buildGeminiPrompt = (tasks: string[]): string => {
  const tasksJson = JSON.stringify(tasks, null, 2);
  
  return `You are a task prioritization expert. Analyze the following list of tasks and return a JSON array of objects.

Each object must have exactly these three keys:
- "task": the original task string (unchanged)
- "priority": must be exactly one of: "High", "Medium", or "Low"
- "category": a simple one-word category like "Work", "Home", "Personal", "Health", "Finance", etc.

Prioritize based on urgency and importance:
- High priority: urgent AND important
- Medium priority: either urgent OR important  
- Low priority: neither urgent nor important

Tasks to prioritize:
${tasksJson}

Return ONLY a valid JSON array with no additional text, explanation, or markdown formatting.`;
};