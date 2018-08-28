import { searchData } from "../../services/db/client";

export default async (req, res, next) => {
  try {
    const result = await searchData();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
