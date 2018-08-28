import express from "express";
const Router = express.Router();

import publish from "./publish";
import search from "./search";
import version from "./version";

Router.get("/devops/ping", (req, res) => {
  res.send("pong");
});

Router.get("/search", search);
Router.get("/version/:id", version);

Router.use(publish);

export default Router;
