import express from "express";
import logger from "./services/logger";
import helmet from "helmet";
import cors from "cors";
import errorHandler from "api-error-handler";
import bodyParser from "body-parser";
import routes from "./routes";


const app = express();

app.logger = logger;
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(routes);
app.use(errorHandler());

export default app;
