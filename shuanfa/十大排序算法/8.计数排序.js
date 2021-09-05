/**
 * 计数排序
 * 
 * 复杂度 简单
 * 
 * 逻辑
 *    1. 计算出数组中的最大值
 *    2. 开辟一个区域，其中数组的长度为最大值的大小
 *    3. 将需要排序的数据分别与区域的数组下标进行比较，相同的元素则计数加1，
 *    4. 迭代区域，区域中的数组若长度大于零，则取出其下表对应的值，放入排序数组中
 * @param {*} arr
 * @param {*} maxValue
 * @returns
 */

function countingSort(arr) {
  // 找出最大值
  let maxValue = arr[0];
  for (let index = 0; index < array.length; index++) {
    if (arr[index] > maxValue) maxValue = arr[index];
  }

 //为每个值开辟数组空间，将相同的元素放入同一个数组空间中，计算数组的长度
  let bucket = new Array(maxValue + 1);
  for (let i = 0; i < arr.length; i++) {
    if (!bucket[arr[i]]) bucket[arr[i]] = 0;
    bucket[arr[i]]++;
  }

//   循环开辟的数组空间
  let sortedIndex = 0;
  for (let j = 0; j < maxValue + 1; j++) {
    //   若数组空间里存在元素,则取出元素。J其实就是数组中元素的值
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}
const array = [4, 1, 35, 2, 70, 5, 801, 0];

console.log(countingSort(array).toString());
