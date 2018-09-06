import express from "express";
import { connect } from "marpat";
import { Filemaker } from "fms-api-client";
import { routes } from "./routes";
import { credentials } from "./configuration";

connect("nedb://memory").then(db =>
  Filemaker.findOne()
    .then(client => (client ? client : Filemaker.create(credentials.filemaker)))
    .then(client => client.save())
);
const app = express();

routes(app);

export { app };
