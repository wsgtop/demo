import {redis} from './conn.js'

const res = await redis.set('foo','123---')
console.log(res);