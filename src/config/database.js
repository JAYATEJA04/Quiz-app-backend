import { MongoClient } from "mongodb";
import { connectionString } from "../mongodb_cred.js";

const client = new MongoClient(connectionString);

let database, mainScreenContentDatabase;

const connectDB = async () => {
  try {
    await client.connect();
    database = client.db("Quizzy");
    mainScreenContentDatabase = client.db("MainScreenContent");
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database: ", error);
  }
};

export { connectDB, database, mainScreenContentDatabase };
