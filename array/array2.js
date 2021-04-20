const arr = [{id:'123',name:'zhangsan'},{id:'1234',name:'zhangsan'}]
var arr3 = [
  {name: 'a',id: 1}, {name: 'a',id: 2}, 
  {name: 'b',id: 3}, 
  {name: 'c',id: 4}, {name: 'c',id: 6}, 
  {name: 'b',id: 6}, {name: 'd',id: 7}];
let deWeightThree = () => {
    let map = new Map();
    for (let item of arr) {
        if (!map.has(item.name)) {
            map.set(item.name, item);
        }
    }
    return [...map.values()];
}
let newArr3 = deWeightThree();
console.log('%c%s', 'color:red;', '方法三：es6,newArr3', newArr3);