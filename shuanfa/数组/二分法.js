/**
 * 二分法
 * 也成为折半法，是一种在有序数组中查找特定元素的搜索算法
 *
 */

// 要求：从数组中查找指定的元素，返回元素的索引,如没找到返回 -1

// javaScript写法,默认数组是由小到大的升序排列，没有重复值
const search = (arr, num) => {
  let count = 0;
  let left = 0; // 左边界下标
  let right = arr.length - 1; // 右边界下标
  let middle;
  while (left <= right) {
    count++;
    console.log('循环次数',count);
    // 数组的两个边界都需要计算需要使用等于比较
    middle = (left + right ) >> 1; // 取中间值，js因为除法有小数位，所以使用了位移运算
    if (num === arr[middle]) {
      return middle;
    } else if (num < arr[middle]) {
      right = middle - 1; // 重新划定右边界
    } else {
      left = middle + 1; // 重新划定左边界
    }
  }
  return -1;
};

const arr1 = [1, 2, 3, 6, 8, 9, 11, 46, 78, 98, 144];
const num1 = 11;

const res = search(arr1, num1);
console.log("打印值：", res);
