// /**
//  * 快速排序
//  * 通过多次比较和交换是实现排序
//  * 
//  * 冒泡排序的增强版。
//  * 
//  */

// function quickSort(arr, left, right) {
//   let len = arr.length,
//     partitionIndex,
//     left = typeof left != "number" ? 0 : left,
//     right = typeof right != "number" ? len - 1 : right;

//   if (left < right) {
//     partitionIndex = partition(arr, left, right);
//     quickSort(arr, left, partitionIndex - 1);
//     quickSort(arr, partitionIndex + 1, right);
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   //分区操作
//   let pivot = left; //设定基准值（pivot）
//   let index = pivot + 1;
//   for (let i = index; i <= right; i++) {
//     if (arr[i] < arr[pivot]) {
//       [arr[i], arr[index]] = [arr[index], arr[i]];
//       index++;
//     }
//   }
//   [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
//   return index - 1;
// }

// // const array = [4,1,3,2,7,5,8,0]