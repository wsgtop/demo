const Redis = require('ioredis');

const redis = new Redis();

//  计算时间
const timing = async (name = 'test', cb) => {
    console.time(name);
    typeof cb === 'function' && await cb();
    console.timeEnd(name);
}

// set
timing('set', _ => {
    redis.set('foo', 'bar');
    redis.get('foo').then(res => {
        console.log(res);
    });
});

// del
timing('del', _ => {
    redis.del('foo').then(res => {
        console.log(res);
    });
});

// sadd [set 集合]
timing('sadd', _ => {
    redis.sadd('seta', 1, 3, 5, 7).then(res => console.log(res));
    redis.sadd('setb', [1, 3, 5, 7]).then(res => console.log(res));
});

// lpush [list 列表]
timing('lpush', _ => {
    redis.lpush('list', [1, 2, 3]).then(res => console.log(res));
    redis.lrange('list', [0, -1]).then(res => console.log(res));
});

// 选择数据库 [序号]
timing('select', _ => {
    // 选择 1 号数据库，然后查询 1 号数据库的 keys
    redis.select(1).then(res => {
        redis.set('name', 'xiaoming');
        redis.keys('*').then(res => console.log(res));
    })
});

// 事务
timing('basic', async () => {
    redis.multi().set('a', 1).set('b', 2).exec();
});

// 管道
redis.pipeline().get('a').get('b').exec().then(res => {
    console.log(res);
});