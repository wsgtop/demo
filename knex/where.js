import knex from 'knex'
const db = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "123456",
    database:"myapp_test"
  },
  debug:true,
  log: {
    debug(message) {
      console.log('debug>',message);
    },
  }
});

const u = await db('users').where('id','=',10)

console.log(u);