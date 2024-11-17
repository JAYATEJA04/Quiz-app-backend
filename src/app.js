import express from "express";
import cors from "cors";

import {
  ReactNative_Advance_Topics_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
  ReactNative_Advance_Topics_Quiz_Questions,
} from "./data/ReactNative_data";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const getQuizData = (language, topic) => {
  const data = {
    ReactNative,
    ReactJS,
    JavaScript,
    Java,
    TypeScript,
  };

  if (data[language] && data[language][topic]) {
    return data[language][topic];
  } else {
    return null;
  }
};

app.get("/quiz/:language/:topic", (req, res) => {
  const { language, topic } = req.params;

  const formattedTopic = `${topic}_Quiz_Questions`;
  const quizData = getQuizData(language, formattedTopic);

  if (quizData) {
    res.json(quizData);
  } else {
    res
      .status(404)
      .json({ message: `No quiz data found for ${language} - ${topic}` });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
