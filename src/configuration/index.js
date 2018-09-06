import "now-env";

import { port } from "./server.configuration";
import { filemaker } from "./filemaker.configuration";
import { redis } from "./redis.configuration";
import { duration } from "./cache.configuration";

const credentials = {
  redis,
  filemaker
};

export { port, duration, credentials };
