import { database } from "../config/database.js";

export const countCorrectPoints = 0;

export const getQuizQuestions = async (req, res) => {
  const { language } = req.params;

  try {
    const fundamentals = await database
      .collection(`${language}_Fundamentals`)
      .find({})
      .toArray();
    const intermediate = await database
      .collection(`${language}_Intermediate`)
      .find({})
      .toArray();
    const advanced = await database
      .collection(`${language}_Advanced`)
      .find({})
      .toArray();

    const allQuestions = { fundamentals, intermediate, advanced };
    console.log("in here in quiz content");
    res.json(allQuestions);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const calculatePoints = (isCorrect, level) => {
  if (!isCorrect) return 0;

  switch (level) {
    case "Fundamentals":
      return 1;
    case "Intermediate":
      return 2;
    case "Advanced":
      return 3;
    default:
      return 1;
  }
};

export const submitAnswer = async (req, res) => {
  const { language, level, questionId } = req.params;
  const { selectedOption } = req.body;
  // console.log("question id:", questionId);

  try {
    const collectionName = database.collection(`${language}_${level}`);
    const question = await collectionName.findOne({ id: parseInt(questionId) });

    // console.log("language:", language, "level:", level, "question:", question);

    if (!question) {
      return res
        .status(404)
        .json({ message: `Question with ID: ${questionId} not found!` });
    }

    const isCorrect = question.correctAnswer === selectedOption.optionId;
    const points = calculatePoints(isCorrect, level);

    // countCorrectPoints += points;

    await database.collection(`${language}_selectedOptions`).insertOne({
      questionId: parseInt(questionId),
      selectedOption,
      isCorrect,
      points,
      timestamp: new Date(),
    });

    res.json({ isCorrect, points });
  } catch (error) {
    console.error("Error submitting answer: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const clearSelectedOptions = async (req, res) => {
  const { quizTitle } = req.params;

  try {
    await database.collection(`${quizTitle}_selectedOptions`).deleteMany({});
    res.status(200).json({ message: "Selected options cleared successfully" });
  } catch (error) {
    console.error("Error clearing selected options: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
