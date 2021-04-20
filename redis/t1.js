import {redis} from './lib/conn.js'

  await redis.set("test_String", "redis");
  const str1 = await redis.get("test_String");
  console.log("设置test_String，键值为:", str1);

  await redis.set("test_String", "redis1");
  const str2 = await redis.get("test_String");
  console.log("查询test_String，键值为:", str2);