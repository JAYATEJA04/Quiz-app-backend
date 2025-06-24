import express from "express";
import { getMainScreenContent } from "../controllers/mainScreenController.js";

const router = express.Router();

router.get("/:language/main-screen-content", getMainScreenContent);

export default router;
