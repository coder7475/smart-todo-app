/**
 * Parse Gemini response and extract JSON array
 */
export const parseGeminiResponse = (content: string): unknown => {
  try {
    // Try direct JSON parse
    const parsed = JSON.parse(content);
    
    // Handle various wrapped formats
    if (Array.isArray(parsed)) {
      return parsed;
    }
    if (parsed.tasks && Array.isArray(parsed.tasks)) {
      return parsed.tasks;
    }
    if (parsed.prioritized_tasks && Array.isArray(parsed.prioritized_tasks)) {
      return parsed.prioritized_tasks;
    }
    if (parsed.result && Array.isArray(parsed.result)) {
      return parsed.result;
    }
    
    return parsed;
  } catch {
    // Try to extract from markdown code blocks
    const jsonMatch = content.match(/``````/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[1]);
    }
    
    // Try to find JSON array pattern
    const arrayMatch = content.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (arrayMatch) {
      return JSON.parse(arrayMatch[0]);
    }
    
    throw new Error('Could not parse JSON from Gemini response');
  }
};