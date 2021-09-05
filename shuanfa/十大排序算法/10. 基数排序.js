/**
 * 基数排序
 *
 * 使用了桶的概念，根据键值分配桶
 *
 * 按照先低位 再高位进行排序 ；直到最高位
 * 排序复杂度 简单
 */

function radixSort(arr) {
  let counter = []; // 用来存放桶的
  const maxValue = getMaxValue(arr); // 先查出数据的最大值
  const maxDigit = maxValue.toString().length; // 查出数据的最大位数
  let mod = 10; //   mod和dev两个数用来计算位数上的值
  let dev = 1;  // 
  for (let i = 0; i < maxDigit; i++,dev *= 10, mod *= 10) {  // 按位数进行循环，依次取 个位  十位 百位 千位
    for (let j = 0; j < arr.length; j++ ) {  // 遍历数组
      let bucket = parseInt((arr[j] % mod) / dev); // 取不同位数上对应的值
      console.log("sssss", i, bucket);
      if (counter[bucket] == null) counter[bucket] = []; // 初始化这个桶
      counter[bucket].push(arr[j]); // 根据位数上的值将元素放入相应的基数桶中
    }

    // 下面使用循环，将几个桶中的数据重新取出来，放入原来的数组中
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null;
      if (counter[j]) {
        while ((value = counter[j].shift()) != null) {
          // 依次从桶中取出数据
          arr[pos++] = value;
        }
      }
    }
    
  }
  return arr;
}

function getMaxValue(array) {
  let temp = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > temp) temp = array[index];
  }
  return temp;
}
const array = [4, 1, 35, 2, 70, 5, 801, 0];

console.log(radixSort(array).toString());
