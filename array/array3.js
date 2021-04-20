const arr1 = [{id:'123',name:'zhangsan'},{id:'1234',name:'zhangsan'},{id:'12345',name:'zhangsan'},{id:'123456',name:'zhangsan'},{id:'12347',name:'zhangsan'}]
const arr2 = [{id:'1234',nickname:'zhangsan'},{id:'12345',nickname:'lisi'},{id:'123',nickname:'zhangsan'}]


import _ from 'lodash'
const log = _.xorBy(arr1, arr2, 'id');

console.log(log);





console.log(_.uniqBy(arr2,'nickname'))

const reprocessing = array => {
    const map = new Map();
    for (const item of array) {
      if (!map.has(item.nickname)) {
        map.set(item.nickname, item);
      }
    }
    return [...map.values()];
  };


  console.log(reprocessing(arr2));