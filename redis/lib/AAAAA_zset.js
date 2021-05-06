import {redis} from './conn.js'

// Set  无序的String类型集合
async function demoSet() {
  await redis.del("test_set");
  await redis.sadd("test_set", "oracle", "mysql", "sqlsqlver", "oracle"); // set
  const data = await redis.smembers("test_set"); // get
  console.log("Set:", data);
}


demoZset();
