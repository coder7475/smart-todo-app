import callGeminiAPI from "@/utils/callGemiAPI";
import { PrioritizedTask, PrioritizeRequest } from "./tasks.types"
import { ensureAllTasks, validateResponse } from "@/utils/validationHelpers";

const prioritizeTasks = async (request: PrioritizeRequest): Promise<PrioritizedTask[]> => {
    try {
        const { tasks } = request;

        if (!tasks || tasks.length === 0) {
            throw new Error("No tasks provided for prioritization");
        }

       // Call Gemini API to prioritize tasks
       const rawResponse = await callGeminiAPI(tasks);
       
       const validatedResponse = validateResponse(rawResponse);

       const finalResponse = ensureAllTasks(tasks, validatedResponse);

       return finalResponse;
    } catch (error) {
        throw error;
    }
}

export const tasksServices = {
    prioritizeTasks,
}