import knex from 'knex'
const db = knex({
  client: "mysql2",
  connection: {
    host: "47.94.68.124",
    port: "3306",
    user: "wsg",
    password: "wang1234",
    database:"manage_serve"
  },
  debug:true,
  log: {
    debug(message) {
      console.log('debug>',message);
    },
  }
});

// const u = await db('user').where('state','=','1')
// console.log(u);



const i = await db('user').insert({id:'5asdf11iah5548',name:'呵呵'})
console.log('====>>>',i);