import request from "request-promise";

import app from "../src/app";

const port = 4002;
const TOKEN = process.env.TEST_TOKEN;

global.rp = request.defaults({
  baseUrl: "http://localhost:4002",
  headers: { accept: "application/json", authorization: `Bearer ${TOKEN}` }
});

let server;
before(function(done) {
  server = app.listen(port);
  console.log("opening server");
  server.once("listening", () => done());
});

after(function(done) {
  server.close(err => {
    if (err) console.log("server close failed" + err.toString());
    console.log("server closed");
    done();
    process.exit();
  });
});

process.on("unhandledRejection", (reason, p) =>
  app.error("Unhandled Rejection at: Promise ", p, reason)
);

process.on("uncaughtException", err => {
  app.error("whoops! There was an uncaught error", err);
  //process.exit(1);
});
