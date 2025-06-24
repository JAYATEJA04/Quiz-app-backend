import express from "express";
import { getResultsOnDashBoard } from "../controllers/resultsDashBoardController.js";

const router = express.Router();

router.get("/:quiztopic/:level/dashboard-results", getResultsOnDashBoard);
console.log("hi from dashboard route");

export default router;
