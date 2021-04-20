import {redis} from '../conn.js'

const delCount = await redis.del('key')  // 删除key,若key值存在就删除，不存在就啥也不做
console.log('成功删除key的行数：',delCount);   // 返回删除成功的数量

const res = await redis.dump('test_zset') //序列化 目的：将保存在内存中的数据持久化
console.log('序列化后的类型和返回序列化后的值：',typeof res,'---->',res);

const res1 = await redis.exists('foo')   // 检查KEY是否存在
console.log('key值是否存在：',res1);

await redis.set('tempkey','啥也不是')
const res2 = await redis.expire('tempkey',60)  //设置过期时间，单位秒。1分钟
console.log('秒-->为key设置过期时间：',res2);

await redis.set('tempkey2','啥也不是')
const res3 = await redis.expireat('tempkey2',1618389640967)  //设置过期时间，以 UNIX 时间戳(unix timestamp)格式
console.log('时间戳--->为key设置过期时间：',res3);

await redis.set('tempkey3','啥也不是')
const res4 = await redis.pexpire('tempkey3',36000)  //设置过期时间，单位豪秒。36秒
console.log('毫秒---->为key设置过期时间：',res4);

const res5 = await redis.keys('tempkey*')  // 根据匹配符查找符合条件的key值
console.log('查询搜索到的KEY值：',res5);


await redis.set('key1','啥也不是')
await redis.pexpire('key1',60)
const res6 = await redis.persist('key1')  // 设置永不过期
console.log('设置永不过期：',res6);


const res7 = await redis.pttl('key1')  //以毫秒为单位，返回剩余的过期时间
console.log(res7);
const res8 = await redis.ttl('key1')   //以秒为单位，返回剩余的过期时间
console.log(res8);

const res9 = await redis.randomkey() //随机返回一个KEY
console.log('随机返回一个KEY：',res9);




// rename 命令   修改key值得名称              rename old_name new_name  
// 改名成功时提示 OK ，失败时候返回一个错误。当 OLD_KEY_NAME 和 NEW_KEY_NAME 相同，或者 OLD_KEY_NAME 不存在时，返回一个错误。 当 NEW_KEY_NAME 已经存在时， RENAME 命令将覆盖旧值。

// move     命令   将key移动到指定的数据库db中            move key_name db_index
// renamenx 命令   在新的key值不存在的情况下修改key的名称  renamenx old_name new_name
// scan     命令   迭代数据库中的key值                    scan
// type     命令   返回key值所存储的值得类型              type key_name 