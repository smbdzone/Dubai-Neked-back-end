import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

export default app;
