import { mainScreenContentDatabase } from "../config/database.js";

export const getMainScreenContent = async (req, res) => {
  const { language } = req.params;

  try {
    const mainScreenContent = await mainScreenContentDatabase
      .collection(`${language}MainScreen`)
      .find({})
      .toArray();
    res.json(mainScreenContent);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
