import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes"

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

export default app;
