import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectsRouter from "./modules/projects/projects.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { connectDatabase } from "./config/database.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
const port = Number(process.env.PORT) || 5000; // Accepts port number as string so conversion is needed to number type

app.get("/api/health", (_req, res) => {
  // _req is used to indicate that the request parameter is intentionally unused
  res.json({
    status: "ok",
    message: "Backend is running",
  });
});

app.use("/api/projects", projectsRouter);

app.use(errorMiddleware);

const startServer = async (): Promise<void> => {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
};

startServer().catch((error: unknown) => {
  console.error("Error starting the server:", error);
  // process.exit(1); // Exit the process with a failure code
});
