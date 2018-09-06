import { app } from "./app";
import { logger } from "./services";
import { port } from "./configuration";

process.on("unhandledRejection", (reason, promise) =>
  logger.error("Unhandled Rejection at: Promise ", promise, reason)
);

process.on("uncaughtException", error =>
  logger.error("whoops! There was an uncaught error", error)
);

app.listen(port, error => {
  if (error) return logger.error(error);
  logger.info(`listening on port ${port}`);
});
