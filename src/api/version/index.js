import { Router } from "express";
import { get } from "./version.controller";

Router.post("/:id", get);

export { Router };
