import { Router } from "express";
import { signup, login } from "../controllers/authController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

// Auth routes
router.post("/signup", signup);
router.post("/login", authMiddleware, login);

export default router;
