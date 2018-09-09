import apicache from "apicache";
import redis from "redis";
import { credentials } from "../configuration";

const { middleware } = apicache.options({
  redisClient: redis.createClient(credentials.redis)
});

export default middleware;
