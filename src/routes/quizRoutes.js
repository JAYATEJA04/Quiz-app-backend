import express from "express";
import {
  getQuizQuestions,
  submitAnswer,
  clearSelectedOptions,
} from "../controllers/quizController.js";
import { getResultsOnDashBoard } from "../controllers/resultsDashBoardController.js";

const router = express.Router();

router.post("basicinfo/:currenttopic/:currentlevel");
router.get("/quiz/:language", getQuizQuestions);
router.post("/quiz/:language/:level/:questionId/answer", submitAnswer);
router.delete("/:quizTitle/selected-options", clearSelectedOptions);

export default router;
