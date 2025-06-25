import express from "express";
import { getQuizQuestion } from "../controllers/quiz.controller.js";
const router = express.Router();
router.get("/random", getQuizQuestion);
export default router;
