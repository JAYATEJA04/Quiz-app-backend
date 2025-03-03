import { MongoClient } from "mongodb";
import { connectionString } from "./mongodb_cred.js";
import {
  ReactNative_Advance_Topics_Quiz_Questions,
  ReactNative_Fundamentals_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
} from "./data/ReactNative_Quiz_Questions.js";
import {
  JAVA_Fundamentals_Quiz_Questions,
  JAVA_Intermediate_Quiz_Questions,
  JAVA_Advanced_Quiz_Questions,
} from "./data/JAVA_Quiz_Questions.js";
import {
  JS_Advance_Quiz_Questions,
  JS_Fundamentals_Quiz_Questions,
  JS_Intermediate_Quiz_Questions,
} from "./data/JavaScript_Quiz_Questions.js";
import {
  TS_Advance_Quiz_Questions,
  TS_Fundamentals_Quiz_Questions,
  TS_Intermediate_Quiz_Questions,
} from "./data/TypeScript_Quiz_Questions.js";
import {
  ReactJS_Advance_Quiz_Questions,
  ReactJS_Fundamentals_Quiz_Questions,
  ReactJS_Intermediate_Quiz_Questions,
} from "./data/ReactJS_Quiz_Questions.js";

import ReactNativeMainScreenContent from "./mainscreens/ReactNativeMainScreenContent.json" assert { type: "json" };
import ReactJSMainScreenContent from "./mainscreens/ReactJSMainScreenContent.json" assert { type: "json" };
import JavaScriptMainScreenContent from "./mainscreens/JavaScriptMainScreenContent.json" assert { type: "json" };
import JAVAMainScreenContent from "./mainscreens/JAVAMainScreenContent.json" assert { type: "json" };
import TypeScriptMainScreenContent from "./mainscreens/TypeScriptMainScreenContent.json" assert { type: "json" };

const uri = connectionString;

const client = new MongoClient(uri);

const questionsContent = [
  {
    category: "ReactNative",
    level: "Fundamentals",
    questions: ReactNative_Fundamentals_Quiz_Questions,
  },
  {
    category: "ReactNative",
    level: "Intermediate",
    questions: ReactNative_Intermediate_Topics_Quiz_Questions,
  },
  {
    category: "ReactNative",
    level: "Advanced",
    questions: ReactNative_Advance_Topics_Quiz_Questions,
  },
  {
    category: "React",
    level: "Fundamentals",
    questions: ReactJS_Fundamentals_Quiz_Questions,
  },
  {
    category: "React",
    level: "Intermediate",
    questions: ReactJS_Intermediate_Quiz_Questions,
  },
  {
    category: "React",
    level: "Advanced",
    questions: ReactJS_Advance_Quiz_Questions,
  },
  {
    category: "JavaScript",
    level: "Fundamentals",
    questions: JS_Fundamentals_Quiz_Questions,
  },
  {
    category: "JavaScript",
    level: "Intermediate",
    questions: JS_Intermediate_Quiz_Questions,
  },
  {
    category: "JavaScript",
    level: "Advanced",
    questions: JS_Advance_Quiz_Questions,
  },
  {
    category: "TypeScript",
    level: "Fundamentals",
    questions: TS_Fundamentals_Quiz_Questions,
  },
  {
    category: "TypeScript",
    level: "Intermediate",
    questions: TS_Intermediate_Quiz_Questions,
  },
  {
    category: "TypeScript",
    level: "Advanced",
    questions: TS_Advance_Quiz_Questions,
  },
  {
    category: "JAVA",
    level: "Fundamentals",
    questions: JAVA_Fundamentals_Quiz_Questions,
  },
  {
    category: "JAVA",
    level: "Intermediate",
    questions: JAVA_Intermediate_Quiz_Questions,
  },
  {
    category: "JAVA",
    level: "Advanced",
    questions: JAVA_Advanced_Quiz_Questions,
  },
];

const mainScreenContent = [
  {
    QuizTitle: "React Native",
    screenName: "ReactNativeMainScreen",
    content: ReactNativeMainScreenContent,
  },
  {
    QuizTitle: "React JS",
    screenName: "ReactMainScreen",
    content: ReactJSMainScreenContent,
  },
  {
    QuizTitle: "JavaScript",
    screenName: "JavaScriptMainScreen",
    content: JavaScriptMainScreenContent,
  },
  {
    QuizTitle: "TypeScript",
    screenName: "TypeScriptMainScreen",
    content: TypeScriptMainScreenContent,
  },
  {
    QuizTitle: "Java",
    screenName: "JAVAMainScreen",
    content: JAVAMainScreenContent,
  },
];

async function insertQuestions(category, level, questions) {
  const database = client.db("Quizzy");
  const collection = database.collection(`${category}_${level}`);

  await collection.deleteMany({});
  await collection.insertMany(questions);
}

async function insertMainScreenContent(screenName, content) {
  const database = client.db("MainScreenContent");
  const collection = database.collection(`${screenName}`);

  await collection.deleteMany({});
  await collection.insertMany(content);
}

async function loadQuizQuestionIntoDB() {
  try {
    await client.connect();

    for (const { category, level, questions } of questionsContent) {
      await insertQuestions(category, level, questions);
    }

    console.log("Quiz questions loaded successfully!");
  } catch (error) {
    console.error("Error loading quiz questions into DB: ", error);
  } finally {
    await client.close();
  }
}

async function loadMainScreenContentIntoDB() {
  try {
    await client.connect();

    for (const { screenName, content } of mainScreenContent) {
      await insertMainScreenContent(screenName, content);
    }

    console.log("Main Screen Content loaded successfully!");
  } catch (error) {
    console.error("Error loading Main Screen Content into DB: ", error);
  } finally {
    // await client.close();
  }
}

loadQuizQuestionIntoDB();
loadMainScreenContentIntoDB();
