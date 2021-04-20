import {redis} from './conn.js'

const res1 = await redis.sadd('aaaaa','level:1')
const res2 = await redis.sadd('aaaaa','level:2')
const res3 = await redis.sadd('aaaaa','level:3')
const res4 = await redis.sadd('aaaaa','level:4')
const res5 = await redis.sadd('aaaaa','level:5')
console.log({res1,res2,res3,res4,res5});


const redisDate = await redis.smembers('aaaaa')
console.log(redisDate);
// const res = await redis.srem('aaaaa',['level:1','level:2','level:3','level:4','level:5'])

// const length = await redis.scard('aaaaa')

// console.log({res});
// console.log({length});


setTimeout(async () => {
  const res = await redis.srem('aaaaa',['level:1','level:2','level:3','level:4','level:5'])
  console.log('---',{res});
  console.log({res});
  const length = await redis.scard('aaaaa')
console.log({length});
}, 10000);