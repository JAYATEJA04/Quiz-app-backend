import {
  ReactNative_Fundamentals_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
  ReactNative_Advance_Topics_Quiz_Questions,
} from "./data/ReactNative.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// const getQuizData = (language, topic) => {
//   return ReactNative_Fundamentals_Quiz_Questions;
// };

// app.get("/quiz/:language/:topic", (req, res) => {
//   const { language, topic } = req.params;

//   const formattedTopic = `${topic}_Quiz_Questions`;
//   const quizData = getQuizData(language);

//   if (quizData) {
//     res.json(quizData);
//   } else {
//     res
//       .status(404)
//       .json({ message: `No quiz data found for ${language} - ${topic}` });
//   }
// });

const quizData = {
  ReactNative: {
    fundamentals: ReactNative_Fundamentals_Quiz_Questions,
    intermediate: ReactNative_Intermediate_Topics_Quiz_Questions,
    advanced: ReactNative_Advance_Topics_Quiz_Questions,
  },
};

const selectedOptions = [];

app.get("/quiz/:language", (req, res) => {
  const { language } = req.params;

  if (!quizData[language]) {
    return res.status(404).json({ message: `Language ${language} not found!` });
  }

  const allQuestions = {
    fundamentals: quizData[language].fundamentals,
    intermediate: quizData[language].intermediate,
    advanced: quizData[language].advanced,
  };

  res.json(allQuestions);
});

app.post("/quiz/:language/:topic/:questionId/answer", (req, res) => {
  const { language, topic, questionId } = req.params;
  const { selectedOption } = req.body;

  if (!quizData[language] || !quizData[language][topic]) {
    return res
      .status(404)
      .json({ message: `Language ${language} or topic ${topic} not found!` });
  }

  const question = quizData[language][topic].find(
    (q) => q.id === parseInt(questionId)
  );
  if (!question) {
    return res
      .status(404)
      .json({ message: `Question with ID ${questionId} not found!` });
  }

  selectedOptions.push({ language, topic, questionId, selectedOption });
  res.json({ message: "Answer submitted successfully!" });
});

app.get("/selected-options", (req, res) => {
  res.json(selectedOptions);
});

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
