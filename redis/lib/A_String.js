import { redis } from "./conn.js";

// String  redis最基本的数据类型，是二进制安全的。一个键最大能存储 512MB
async function testString() {
  // 删除 del
  await redis.del("test_String");
  const str3 = await redis.get("test_String"); //若不存在，返回NULL
  console.log("查询test_String，键值为:", str3);

  // 新增（覆盖旧有内容） set
  const str1 = await redis.set("test_String", "redis");

  // 查询  get
  const str2 = await redis.get("test_String");
  console.log("查询test_String，键值为:", str2);

  //截取字符串，开始位置和结束位置（包括开始位置和结束位置）getrange
  await redis.set("test_String", "redis");
  const str4 = await redis.getrange("test_String", 0, 1);
  console.log("截取test_String，键值为:", str4);

  //截取字符串重新给值，开始位置和结束位置（包括开始位置和结束位置）setrange
  await redis.setrange("test_String", 2, "---redis---");
  const str44 = await redis.get("test_String");
  console.log("test_String保留前几位,重新给值，键值为:", str44);

  // 重新给定新值，并返回旧值 getset
  const str5 = await redis.getset("test_String", "redis_new");
  const str6 = await redis.get("test_String");
  console.log("test_String，旧值为:", str5);
  console.log("test_String，新值为:", str6);

  // getbit命令
  // const str7 = await redis.getbit('test_String',1)
  // console.log("test_String，偏移后的值为:", str7);

  // 批量设置key值和批量查询key值    mset mget
  await redis.mset(
    "test_String1",
    "redis_new1",
    "test_String2",
    "redis_new2",
    "test_String3",
    "redis_new3",
    "test_String4",
    "redis_new4"
  );
  const str8 = await redis.mget(
    "test_String1",
    "test_String2",
    "test_String3",
    "test_String4"
  );
  await redis.del("test_String1");
  await redis.del("test_String2");
  await redis.del("test_String3");
  await redis.del("test_String4");
  console.log("redis查询多个key的值，对应的值为:", str8);

  // 设置key值并设置过期时间(新值覆盖旧值) setex(keyName,timeout,value),单位秒
  await redis.setex("test_String", 60, "redis_new_60");
  const str9 = await redis.get("test_String");
  console.log("redis设置key的值，对应的值为:", str9);
  setInterval(async () => {
    const str10 = await redis.ttl("test_String");
    console.log("redis查询key的值，对应的过期时间为:", str10);
  }, 1000);

  //  Setnx 若key值不存在，重新赋值
  await redis.setnx("test_String", "hellow_redis_new_60");
  const str11 = await redis.get("test_String");
  console.log("key值不存在，给值，查询现在对应的值为:", str11);
  //  msetnx 若key值不存在，重新赋值(批量)
  await redis.msetnx(
    "test_String",
    "hellow_redis_new_m1",
    "test_String_m2",
    "hellow_redis_new_m2",
    "test_String_m3",
    "hellow_redis_new_m3"
  );
  const str12 = await redis.mget(
    "test_String",
    "test_String_m2",
    "test_String_m3"
  );
  console.log("key值不存在，给值，查询现在对应的值为:", str12);

  // strlen 字符串长度
  const str13 = await redis.strlen("test_String");
  console.log("查询现在对应值的长度:", str13);

  // psetex 设置过期时间 单位：毫秒
  await redis.psetex("test_String", 30000, "hello_redis_new_psetex ");
  const str14 = await redis.get("test_String");
  const str15 = await redis.ttl("test_String");
  console.log("test_String对应的值:", str14, "过期时间：", str15);

  // key中存储的值   增一 incr  减一 decr
  await redis.set("test_String_N", "100");
  await redis.incr("test_String_N");
  const str16 = await redis.get("test_String_N");
  console.log("test_String对应的值:", str16);
  await redis.decr("test_String_N");
  const str17 = await redis.get("test_String_N");
  console.log("test_String对应的值:", str17);

  // key中存储的值  加增量值  incrby   减增量值  decrby
  await redis.incrby("test_String_N", 11);
  const str18 = await redis.get("test_String_N");
  console.log("test_String对应的值:", str18);
  await redis.decrby("test_String_N", 11);
  const str19 = await redis.get("test_String_N");
  console.log("test_String对应的值:", str19);

  // key中存储的值加 浮点增量值  incrbyfloat
  await redis.incrbyfloat("test_String_N", "11.09");
  const str20 = await redis.get("test_String_N");
  console.log("test_String对应的值:", str20);

  // key中存储的值减 增量值  append
  await redis.append("test_String_N", 11.901);
  await redis.append("test_String_N_", 11.901);
  const str21 = await redis.get("test_String_N");
  const str22 = await redis.get("test_String_N_");
  console.log("test_String对应的值:", str21, str22);
}

testString();
