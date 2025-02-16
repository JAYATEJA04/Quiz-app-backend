import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import { connectionString } from "./mongodb_cred.js";

const app = express();
const PORT = 3000;

const uri = connectionString;
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

let database;

client
  .connect()
  .then(() => {
    database = client.db("Quizzy");
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database: ", error);
  });

app.get("/quiz/:language", async (req, res) => {
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

    const allQuestions = {
      fundamentals,
      intermediate,
      advanced,
    };
    // console.log(allQuestions);

    res.json(allQuestions);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// app.get("/print/reactnative/fundamentals", async (req, res) => {
//   try {
//     const fundamentals = await database
//       .collection("ReactNative_Fundamentals")
//       .find({})
//       .toArray();
//     console.log(fundamentals); // Print the contents to the console
//     res.json(fundamentals); // Send the contents as a JSON response
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

app.post("/quiz/:language/:topic/:questionId/answer", async (req, res) => {
  const { language, topic, questionId } = req.params;
  const { selectedOption } = req.body;

  try {
    const collection = database.collection(`${language}_${topic}`);
    const question = await collection.findOne({ id: parseInt(questionId) });

    if (!question) {
      return res
        .status(404)
        .json({ message: `Question with ID ${questionId} not found!` });
    }

    const isCorrect = question.correctAnswer === selectedOption.optionId;
    const points = isCorrect ? 1 : 0;

    await database.collection("selectedOptions").insertOne({
      questionId: parseInt(questionId),
      selectedOption,
      isCorrect,
      points,
      timeStap: new Date(),
    });

    res.json({ isCorrect, points });
  } catch (error) {
    console.error("Error submitting answer: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/selected-options", async (req, res) => {
  try {
    await database.collection("selectedOptions").deleteMany({});
    res.status(200).json({ message: "Selected options cleared successfully" });
  } catch (error) {
    console.error("Error clearing selected options: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// app.get("/quiz/:language", (req, res) => {
//   const { language } = req.params;

//   if (!quizData[language]) {
//     return res.status(404).json({ message: `Language ${language} not found!` });
//   }

//   const allQuestions = {
//     fundamentals: quizData[language].fundamentals,
//     intermediate: quizData[language].intermediate,
//     advanced: quizData[language].advanced,
//   };

//   res.json(allQuestions);
// });

// app.post("/quiz/:language/:topic/:questionId/answer", (req, res) => {
//   const { language, topic, questionId } = req.params;
//   const { selectedOption } = req.body;

//   if (!quizData[language] || !quizData[language][topic]) {
//     return res
//       .status(404)
//       .json({ message: `Language ${language} or topic ${topic} not found!` });
//   }

//   const question = quizData[language][topic].find(
//     (q) => q.id === parseInt(questionId)
//   );
//   if (!question) {
//     return res
//       .status(404)
//       .json({ message: `Question with ID ${questionId} not found!` });
//   }

//   const isCorrect = question.correctAnswer === selectedOption.optionId;
//   const points = isCorrect ? 1 : 0;
//   selectedOptions.push({
//     language,
//     topic,
//     questionId,
//     selectedOption,
//     isCorrect,
//     points,
//   });
//   res.json({ message: "Answer submitted successfully!" });
// });

// app.get("/selected-options", (req, res) => {
//   res.json(selectedOptions);
// });

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});

// app.delete("/selected-options", (req, res) => {
//   selectedOptions.length = 0;
//   // Clear the array
//   res.status(200).json({ message: "Selected options cleared successfully" });
// });
