import { redis } from "./conn.js";
// redis列表的demo
async function add(params) {
  const result = await redis.lpush("testList", params);
  console.log("受影响的行数：", result, { params });
  const res = await redis.llen("testList");
  console.log("数据长度:", res, { params });
}
async function getLength(params) {
  const res = await redis.llen("testList");
  console.log("数据长度:", res, { params });
}
async function getALL() {
  const res = await redis.lrange("testList",0,10);
  console.log("数据:", res);
}
async function deleteKey(key) {
  const res = await redis.del(key);
  console.log("删除:", key);
}

add("dataType:1" + new Date());
add("dataType:2" + new Date());
add("dataType:3" + new Date());
add("dataType:4" + new Date());
add("dataType:5" + new Date());
add("dataType:6" + new Date());
add("dataType:7" + new Date());
getALL()
deleteKey("testList")
