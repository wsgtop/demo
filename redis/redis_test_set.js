import {redis} from './conn.js'

async function add(params){
  const result = await redis.sadd('testSet',params)
  console.log('受影响的行数：',result,{params});
  getLength(params)
}
async function getLength(params){
  const res = await redis.scard('testSet')
  console.log('数据长度:',res,{params});
}

add('dataType:1')
add('dataType:2')
add('dataType:3')
add('dataType:4')
add('dataType:5')
add('dataType:6')
add('dataType:7')
