import express from "express";
import cors from "cors";
import quizRoutes from "./routes/quizRoutes.js";
import mainScreenContentRoute from "./routes/mainScreenContentRoute.js";
import dashboardResults from "./routes/resultsDashboardRoute.js";
import { connectDB } from "./config/database.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(mainScreenContentRoute);
app.use(quizRoutes);
app.use(dashboardResults);

connectDB();

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});

// app.delete("/selected-options", (req, res) => {
//   selectedOptions.length = 0;
//   // Clear the array
//   res.status(200).json({ message: "Selected options cleared successfully" });
// });
