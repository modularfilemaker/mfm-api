require("dotenv").config();

const app = require("./app").default;

import logger from "./services/logger";

const port = 4000;

app.listen(port, error => {
  if (error) return app.error(error);
  logger.info("listening on port " + port);
});

process.on("unhandledRejection", (reason, p) =>
  logger.error("Unhandled Rejection at: Promise ", p, reason)
);

process.on("uncaughtException", err => {
  app.logger.error("whoops! There was an uncaught error", err);
  //process.exit(1);
});
