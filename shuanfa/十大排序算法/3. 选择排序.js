/**
 * 选择排序，找到最大的或者最小的元素，放在排序队列的起始位置，在从剩余的元素中继续寻找最大（最小）的元素，放在上一次选择元素的后面
 * 依次类推。
 * 
 * 每次都需要扫描剩余的元素，再找出最大值(最小值)的位置，然后进行交换
 * 
 * 属于冒泡排序的改进版
 * @param {*} array 
 * @returns 
 */


function selectSort(array) {
  let minIndex;
  let count = 0
  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    for (let j = i+1; j < array.length; j++) {
      count ++
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  console.log(count);
  return array
}

const array = [4,1,3,2,7,5,8,0]


console.log(selectSort(array));