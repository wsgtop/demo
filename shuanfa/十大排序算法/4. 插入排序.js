/**
 * 插入排序
 *
 * 复杂度  稍显复杂
 * 
 * 思路：
 * 以第一个元素为基准，
 * 从第二个开始，向前做计较，如果左边的小于右边的，将右边的插入左边
 * 以此类推 ，从第三个 第四个 向前比对，将数值较小的插入到前面
 * 
 */

function insertSort(array) {
  let left;
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    left = i - 1;
    let temp = array[i];
    while (left >= 0 && array[left] > temp) {
      console.log("--------------", array[left], temp);
      console.log("==============", array[left + 1], array[left]);
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = temp;
    console.log(count++, array.toString());
  }
  return array;
}

const array = [4, 1, 3, 2, 7, 5, 8, 0];
console.log(insertSort([4, 1, 3, 2, 7, 5, 8, 0]).toString());


