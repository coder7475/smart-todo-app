import express, { type Express } from "express";
import helmet from "helmet";
import cors from "cors";

import indexRouter from "@/routes";
import userRoute from "@/routes/tasks.routes";
import { middlewares } from "@/middlewares";
import tasksRouter from "@/routes/tasks.routes";

const app: Express = express();
// connect to database
/*
 * Example conncting to MongoDB using mongoose
 * 
async function connectToMongoDB() {
	try {
		await mongoose.connect(env.MONGODB_URI, {
			connectTimeoutMS: 1000000000,
		});
		console.log("✅ Connected to MongoDB");
	} catch (error) {
		console.error("❌ MongoDB connection error:", error);
		process.exit(1); // Exit if DB connection fails
	}
}

connectToMongoDB().catch((err) => console.error(err));

 */
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Routes
app.use("/", indexRouter);
app.use("/api/v1", tasksRouter);

// Not found route handler
app.use(middlewares.notFoundRoute);
// Global error handler
app.use(middlewares.globalErrorHandler);

export default app;
