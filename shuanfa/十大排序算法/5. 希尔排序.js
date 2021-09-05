/**
 * 希尔排序，也成为缩小增量排序
 *
 * 插入排序的升级版
 *
 *
 */

// function shellSort(arr) {
//   let len = arr.length;
//   let temp;
//   let gap = 1;
//   while (gap < len / 3) {
//     //动态定义间隔序列
//     gap = gap * 3 + 1;
//   }
//   console.log(gap);
//   for (; gap > 0; gap = Math.floor(gap / 3)) {
//     for (let i = gap; i < len; i++) {
//       temp = arr[i];
//       let j = i - gap;
//       for (; j >= 0 && arr[j] > temp; j -= gap) {
//         arr[j + gap] = arr[j];
//       }
//       arr[j + gap] = temp;
//     }
//   }
//   return arr;
// }

// const array = [4, 1, 35, 2, 70, 5, 801, 0];
// console.log(shellSort(array));
