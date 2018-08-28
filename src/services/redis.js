import apicache from "apicache";
import redis from "redis";

const options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  auth_pass: process.env.REDIS_AUTH_PASS
};

export const cache = apicache.options({
  redisClient: redis.createClient(options)
}).middleware;
