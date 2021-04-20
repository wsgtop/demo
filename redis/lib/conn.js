import Redis from 'ioredis'
// const redis = new Redis(6379,'127.0.0.1')
// export const redis = new Redis('redis://:admin@127.0.0.1:6379') //带有密码

// export const redis = new Redis()                     // Connect to 127.0.0.1:6379
// export const redis = new Redis(6380)                 // 127.0.0.1:6380
// export const redis = new Redis(6379, '192.168.1.1')  // 192.168.1.1:6379
// export const redis = new Redis('/tmp/redis.sock')
export const redis = new Redis({
    port: 6379,                  // Redis port
    host: '127.0.0.1',           // Redis host
    family: 4,                   // 4 (IPv4) or 6 (IPv6)
    password: 'admin',            // 数据库密码
    db: 1,                       // 数据库号
})
 
// 使用 redis 协议
// new Redis('redis://:authpassword@127.0.0.1:6380/4')