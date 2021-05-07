import {redis} from './conn.js'

// sorted Set  
// 集合中最大的成员数为 232 - 1 (4294967295, 每个集合可存储40多亿个成员)。
// 有序集合和集合一样也是 string 类型元素的集合,且不允许重复的成员。不同的是每个元素都会关联一个 double 类型的分数。redis 正是通过分数来为集合中的成员进行从小到大的排序。


// zadd   新增一个或者多个成员
// zrange 查询

await redis.del("test_zset");
await redis.zadd("test_zset", 99, "oracle"); // set
await redis.zadd("test_zset", 97, "mysql"); // set
await redis.zadd("test_zset", 93, "sqlserver"); // set
await redis.zadd("test_zset", 90, "mongodb"); // set
const data = await redis.zrange("test_zset", 0, 10); // get
console.log("Zset:", data);

// zcard 获取成员数
const zcard = await redis.zcard('test_zset')
console.log('成员数量：',zcard);

// zcount 计算指定分数区间的成员数量
const zcount = await redis.zcount('test_zset',95,100)
console.log('指定区间范围内的成员数量：',zcount);

// zincrby         增量
// zinterstore     计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 destination 中
// zlexcount       指定字典区间内成员数量
// zrange          通过索引区间返回有序集合指定区间内的成员
// zlexcount       在有序集合中计算指定字典区间内成员数量
// zrangebylex     通过字典区间返回有序集合的成员
// zrangebyscore   通过分数返回有序集合指定区间内的成员
// zrank           返回有序集合中指定成员的索引

// zrem              移除有序集合中的一个或多个成员
// zremrangebylex    移除有序集合中给定的字典区间的所有成员
// zremrangebyrank   移除有序集合中给定的排名区间的所有成员
// zremrangebyscore  移除有序集合中给定的分数区间的所有成员

// zrevrange         返回有序集中指定区间内的成员，通过索引，分数从高到低
// zrevrangebyscore  返回有序集中指定分数区间内的成员，分数从高到低排序
// zrevrank          返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序
// zscore            返回有序集中，成员的分数值
// zunionstore       计算给定的一个或多个有序集的并集，并存储在新的 key 中
// zscan             迭代有序集合中的元素
