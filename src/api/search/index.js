import { Router } from "express";
import { list } from "./search.controller";

const router = Router();

router.get("/", list);

export default router;
