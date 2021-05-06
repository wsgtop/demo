import {redis} from './conn.js'

// Hash   每个 hash 可以存储 2^32 -1 键值对（40多亿）。

// del 删除键
// hmset 设置KEY
// hmget 查询KEY
async function demoHash() {
  await redis.del('test_hash')
  await redis.hmset('test_hash','oracle' ,'my name is oracle');
  await redis.hmset('test_hash','mysql' ,'my name is mysql');
  await redis.hmset('test_hash','sqlsqlver' ,'my name is sqlsqlver');
  await redis.hmset('test_hash','mongodb' ,'my name is mongodb');
  await redis.hmset('test_hash','sqllite' ,'my name is sqllite');
  const data = await redis.hmget("test_hash",'oracle','mysql');
  console.log('hash:',data);
}
await demoHash()

// hexists 查看指定字段是否存在
const hexists = await redis.hexists('test_hash','oracl')
console.log(hexists);

// hgetall 返回Hash表中的所有字段和值
const hgetall = await redis.hgetall('test_hash')
console.log(hgetall);

// hkeys hash表中所有的filed
const hkeys = await redis.hkeys('test_hash')
console.log('所有的filed',hkeys);

// hvals 获取哈希表中所有值
const hvals = await redis.hvals('test_hash')
console.log('所有的值',hvals);

// klen hash表中filed的数量
const klen = await redis.hlen('test_hash')
console.log('filed的数量',klen);

// hset 哈希表中的字段赋值。表不存在，一个新的哈希表被创建并进行 HSET 操作。字段已经存在，旧值将被覆盖。
const hset = await redis.hset('test_hash','redis','hello wolrd')
console.log('哈希表中的字段赋值,返回结果',hset);

// hsetnx 为哈希表中不存在的的字段赋值

// hscans 

// hincrby Hash表中值的增减操作 整数

// hincrbyfloat  Hash表中值的增减操作 浮点数