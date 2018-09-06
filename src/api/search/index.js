import { Router } from "express";
import { list } from "./search.controller";

Router.get("/", list);

export { Router };
