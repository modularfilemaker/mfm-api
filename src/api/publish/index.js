import { Router } from "express";
import { create } from "./publish.controller";

const router = Router();

router.post("/", create);

export default router;
