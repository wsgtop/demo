import { redis } from "./conn.js";

// List 列表最多可存储 2^32 -1 元素 (4294967295, 每个列表可存储40多亿)。

// lpush 将一个或多个值插入到列表头部，列表不存在时创建。
// lrange 查询指定开始到结束位置的列表元素
// lpushx 将一个或多个值插入到列表头部，列表不存在时忽略该操作。
await redis.del("test_list");
await redis.lpush("test_list", "oracle", "mysql", "sqlsqlver", "oracle");
const data = await redis.lrange("test_list", 0, 10);
console.log("list的值", data);

// lindex 获取指定位置的元素
const lindex = await redis.lindex("test_list", 0);
console.log("列表的第一个元素", lindex);

// llen  获取列表的长度
const llen = await redis.llen("test_list");
console.log("列表的长度", llen);

// linsert  在列表的元素前或者后插入元素。返回操作后列表的长度
const linsert_BEFORE = await redis.linsert(
  "test_list",
  "BEFORE",
  "mysql",
  "Redis_BEFORE"
);
const linsert_AFTER = await redis.linsert(
  "test_list",
  "AFTER",
  "mysql",
  "Redis_AFTER"
);
console.log(linsert_BEFORE, linsert_AFTER);

// lpop 移除列表的第一个元素
const lpop = await redis.lpop("test_list");
const lpopList = await redis.lrange("test_list", 0, 10);
console.log("列表的第一个元素：", lpop);
console.log("移除列表的第一个元素剩余元素：", lpopList);

//
