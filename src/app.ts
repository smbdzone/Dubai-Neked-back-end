import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import billingRoutes from './routes/billingRoutes';
dotenv.config();

const app: Application = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api', billingRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

export default app;
