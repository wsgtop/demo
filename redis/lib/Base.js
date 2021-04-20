import {redis} from "./conn.js";

// 删除key
await redis.del('test_string')
await redis.del('test_hash')
await redis.del('test_list')
await redis.del('test_set')
await redis.del('test_zset')

// String  redis最基本的数据类型，是二进制安全的。一个键最大能存储 512MB
async function demoString() {
  await redis.set("test_string", "my name is LiLei");  // set
  const data = await redis.get("test_string");         // get
  console.log('string:',data);
}

// Hash   每个 hash 可以存储 2^32 -1 键值对（40多亿）。
async function demoHash() {
  await redis.hmset('test_hash','oracle' ,'my name is oracle');              // set
  await redis.hmset('test_hash','mysql' ,'my name is mysql');
  await redis.hmset('test_hash','sqlsqlver' ,'my name is sqlsqlver');
  await redis.hmset('test_hash','mongodb' ,'my name is mongodb');
  await redis.hmset('test_hash','sqllite' ,'my name is sqllite');
  const data = await redis.hmget("test_hash",'oracle','mysql');              // get
  console.log('hash:',data);
}

// List 列表最多可存储 2^32 -1 元素 (4294967295, 每个列表可存储40多亿)。
async function demoList() {
  await redis.lpush('test_list','oracle' ,'mysql','sqlsqlver','oracle');              // set
  // await redis.lpush('test_list','mysql' ,'my name is mysql');
  // await redis.lpush('test_list','sqlsqlver' ,'my name is sqlsqlver');
  const data = await redis.lrange("test_list",0,10);              // get
  console.log('list',data);
}

// Set  无序的String类型集合
async function demoSet() {
  await redis.sadd('test_set','oracle' ,'mysql','sqlsqlver','oracle');              // set
  const data = await redis.smembers("test_set");              // get
  console.log('Set:',data);
}

// Zset
async function demoZset() {
  await redis.zadd('test_zset',99,'oracle');              // set
  await redis.zadd('test_zset',97,'mysql');              // set
  await redis.zadd('test_zset',93,'sqlserver');              // set
  await redis.zadd('test_zset',90,'mongodb');              // set
  const data = await redis.zrange ("test_zset",0,10);                            // get
  console.log('Zset:',data);
}

demoString()
demoHash()
demoList()
demoSet()
demoZset()