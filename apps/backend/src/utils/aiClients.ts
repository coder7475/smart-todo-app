import { env } from "@/configs/envConfig";
import { GoogleGenAI } from "@google/genai";

/**
 * Initialize Gemini client
 */
export const getGeminiClient = () => {
  try {
    // The client gets the API key from env.AI_API_KEY
    const ai = new GoogleGenAI({
      apiKey: env.GEMINI_API_KEY,
    });
    return ai;
  } catch (error) {
    console.error('Failed to initialize Gemini client:', error);
  }
};