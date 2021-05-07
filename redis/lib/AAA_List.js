import { redis } from "./conn.js";

// List 列表最多可存储 2^32 -1 元素 (4294967295, 每个列表可存储40多亿)。

// lpush  lpushx  
// rpush  rpushx
// lpop  rpop
// lrange 
// lindex
// lset
// llen
// linsert
// lrem
// ltrim
// rpoplpush

// lrange 查询指定开始到结束位置的列表元素
// lpush  将一个或多个值插入到列表头部，列表不存在时创建。
// lpushx 将一个或多个值插入到列表头部，列表不存在时忽略该操作。
// rpush  将一个或多个值插入到列表的尾部(最右边)
// rpushx 将一个或多个值插入到列表的尾部(最右边)，列表不存在，操作无效。
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
// rpop 移除列表的最后一个元素
const lpopList1 = await redis.lrange("test_list", 0, 10);
const lpop = await redis.lpop("test_list");
const lpopList2 = await redis.lrange("test_list", 0, 10);
const rpop = await redis.rpop("test_list");
console.log("列表元素：", lpopList1);
console.log("列表的第一个元素：", lpop);
console.log("移除列表的第一个元素剩余元素：", lpopList2);
console.log("列表的最后一个元素：", rpop);


// lrem 移除列表中与Value相等的元素
const lrem = await redis.lrem('test_list',1,'oracle')
console.log('移除的元素的数量：',lrem);

// lset  通过索引来重新设置元素的值。对应的索引值不存在，则报错
await redis.lset('test_list',3,'oracle_3')
const temp_lset = await redis.lindex('test_list','3')
console.log('修改的值：',temp_lset);

// ltrim 删除区间之外的元素
const ltrim = await redis.ltrim('test_list',0,2)
console.log('删除区间之外的元素,操作结果：',ltrim);

// rpoplpush  移除列表的最后一个元素，并将该元素添加到另一个列表并返回
await redis.del('test_list2')
const list = await redis.lrange('test_list',0,10)
await redis.rpoplpush('test_list','test_list2')
const list1 = await redis.lrange('test_list',0,10)
const list2 = await redis.lrange('test_list2',0,10)
console.log(list);
console.log(list1);
console.log(list2);