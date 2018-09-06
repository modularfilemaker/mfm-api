import { Router } from "express";
import { create } from "./publish.controller";

Router.post("/", publish);

export { Router };
