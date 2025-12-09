import { PrioritizedTask } from "@/tasks/tasks.types";
import { getGeminiClient } from "./aiClients";
import { buildGeminiPrompt } from "./buildPrompts";
import { parseGeminiResponse } from "./parseText";

/**
 * Call Google Gemini API using official SDK
 */
const callGeminiAPI = async (tasks: string[]): Promise<PrioritizedTask[]> => {
  const prompt = buildGeminiPrompt(tasks);
  const model = 'gemini-2.5-flash';

  try {
    // Initialize client
    const ai = getGeminiClient();

    if (!ai) {
      throw new Error('Gemini client is not initialized');
    }

    // Generate content using the SDK
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.1,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json',
      },
    });

    // Extract text from response
    const text = response.text;

    if (!text) {
      throw new Error('No text returned from Gemini API');
    }

    // Parse and return the response
    const parsed = parseGeminiResponse(text);
    return parsed as PrioritizedTask[];

  } catch (error: any) {
    // Handle SDK-specific errors
    if (error?.message?.includes('API key')) {
      throw new Error('Invalid or missing Gemini API key');
    }

    if (error?.message?.includes('quota') || error?.message?.includes('rate limit')) {
      throw new Error('Gemini API quota exceeded or rate limit reached');
    }

    if (error?.message?.includes('model not found')) {
      throw new Error(`Specified model "${model}" not found in Gemini API`);
    }

    console.error('Unexpected error calling Gemini:', error);
    throw new Error('An unexpected error occurred while calling the Gemini API');
  }
};

export default callGeminiAPI;