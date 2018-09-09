import { Router } from "express";
import { get } from "./version.controller";

const router = Router();

router.post("/:id", get);

export default router;
