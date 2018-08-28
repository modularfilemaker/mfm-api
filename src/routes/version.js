import { getVersion } from "../services/db/client";

export default async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await getVersion(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
