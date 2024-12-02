import { ReactNative_Fundamentals_Quiz_Questions } from "./data/ReactNative.js";
import express from "express";
import cors from "cors";
// const express = require("express");
// const cors = require("cors");
// const ReactNative = require("./data/ReactNative_data");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const getQuizData = (language, topic) => {
  return ReactNative_Fundamentals_Quiz_Questions;
};

app.get("/quiz/:language/:topic", (req, res) => {
  const { language, topic } = req.params;

  const formattedTopic = `${topic}_Quiz_Questions`;
  const quizData = getQuizData(language);

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
