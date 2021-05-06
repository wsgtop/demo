import {redis} from './conn.js'

// Zset
async function demoZset() {
  await redis.del("test_zset");
  await redis.zadd("test_zset", 99, "oracle"); // set
  await redis.zadd("test_zset", 97, "mysql"); // set
  await redis.zadd("test_zset", 93, "sqlserver"); // set
  await redis.zadd("test_zset", 90, "mongodb"); // set
  const data = await redis.zrange("test_zset", 0, 10); // get
  console.log("Zset:", data);
}

demoSet();