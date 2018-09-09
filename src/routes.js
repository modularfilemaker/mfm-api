import helmet from "helmet";
import cors from "cors";
import { errors } from "celebrate";
import boom from "express-boom";
import bodyParser from "body-parser";
import { publish, search, version } from "./api";
import { cache } from "./services";
import { duration } from "./configuration";

const routes = app => {
  app.use(boom());
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(cache(duration));
  app.use("/search", search);
  app.use("/version", version);
  app.use("/publish", publish);
  app.get("/devops/ping", (req, res) => res.send("pong"));
  app.use(errors());
};

export { routes };
