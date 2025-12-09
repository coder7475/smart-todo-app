import dotenv from "dotenv";
import { z } from "zod";

// Load env variables from .env with error handling
try {
	const result = dotenv.config();

	if (result.error) {
		console.warn("Warning: .env file not found or could not be loaded.\n", result.error.message);
		process.exit(1);
	}
} catch (error) {
	console.error("Error loading environment configuration:", error instanceof Error ? error.message : String(error));
	process.exit(1);
}

// Define Zod schema for validation and transformation
const envSchema = z.object({
	PORT: z
		.string()
		.default("3000")
		.transform((val) => {
			const parsed = Number(val);
			if (Number.isNaN(parsed)) throw new Error("PORT must be a valid number");
			return parsed;
		}),
	HOST: z.string().default("localhost"),
	NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
	DB_URI: z.string().url("DB_URI must be a valid URL"),
});

// Validate process.env and infer typed env object
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error("❌ Invalid environment configuration:");
	console.error(parsedEnv.error.format());
	process.exit(1);
}

export type Env = z.infer<typeof envSchema>;

export const env: Env = parsedEnv.data;
