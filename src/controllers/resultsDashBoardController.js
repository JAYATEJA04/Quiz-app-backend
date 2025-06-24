import { database } from "../config/database.js";
import { countCorrectPoints } from "./quizController.js";

export const getResultsOnDashBoard = async (req, res) => {
  const { quiztopic, level } = req.params;

  console.log(quiztopic);

  const totalPoints = await database
    .collection(`${quiztopic}_selectedOptions`)
    .aggregate([{ $group: { _id: null, totalPoints: { $sum: "$points" } } }])
    .toArray();
  const overallPoints = totalPoints[0]?.totalPoints || 0;
  const totalNoOfQuestions = 15;
  const wrongAnswers = totalNoOfQuestions - overallPoints;

  console.log("hi", quiztopic);

  res.json({ overallPoints, totalNoOfQuestions, wrongAnswers });
};
