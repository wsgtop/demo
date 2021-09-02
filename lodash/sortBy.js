import _ from 'lodash'

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];

const a= _.sortBy(users, function(o) { return o.age; });
const b= _.sortBy(users, function(o) { return o.age; }).reverse();
console.log('a',a);
console.log('b',b);



console.log('users',users);



