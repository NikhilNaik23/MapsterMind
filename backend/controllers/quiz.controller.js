import { getRandomQuestion } from "../models/quiz.model.js";

export const getQuizQuestion = async (req, res) => {
  try {
    const question = await getRandomQuestion();
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: "Failed to get question" });
  }
};
