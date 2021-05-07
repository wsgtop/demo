import { redis } from "./conn.js";

// Set  无序的String类型集合,区分大小写
// 集合中最大的成员数为 2^32 - 1 (4294967295, 每个集合可存储40多亿个成员)。

// sadd     新增元素
// smembers 查询所有元素
// scard    元素数量

await redis.del("test_set");
// oracle值有重复的，只添加一个进集合
await redis.sadd("test_set", "oracle", "mysql", "sqlsqlver", "oracle",'postgresql');
const data = await redis.smembers("test_set");
console.log("集合所有元素:", data);

// scard 元素的数量(长度)
const scard = await redis.scard('test_set')
console.log('元素的数量',scard);

// sdiff        第一个集合和后面集合的差异
// sdiffstore   将给定集合之间的差集存储在指定的集合中

// sinter       给定所有给定集合的交集
// sinterstore  将给定集合之间的交集存储在指定的集合中

// sunion       给定集合的并集
// sunionstore  将给定集合之间的并集存储在指定的集合中

// sismember    判断元素是否存在
// smove        将集合的指定成员移动到另一个集合
// spop         随机移除集合中的一个或者多个成员
// srandmember  随机返回集合中的一个成员
// srem         随机移除一个或者多个成员

const isexists =  await redis.sismember('test_set','oracle')
console.log('判断元素是否存在：',isexists);
const smove = await redis.smove('test_set','test_set2','mysql')
console.log('移动成员是否成功',smove);

const spop1 = await redis.spop('test_set',2)
const spop2 = await redis.spop('test_set2',1)
console.log(spop1,spop2);


await redis.sadd('test_set','oracle','mysql','sqlServer','db2','sqlite')
const srandmember = await redis.srandmember('test_set')
console.log('随机返回的一个成员',srandmember);

const srem = await redis.srem('test_set','mysql','oracle')
console.log('操作结果，移除数量',srem);

