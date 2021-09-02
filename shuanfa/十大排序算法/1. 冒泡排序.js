/**
 * 冒泡排序
 *
 * 复杂度
 *  时间复杂度  O(N^2)
 *  空间复杂度  O(1)
 *  稳定性      稳定
 * 
 * 难易度
 *   简单
 * 
 * 扫描所有元素，比对相邻的元素，进行交换
 * 
 */


//  冒泡排序：从头开始，两两比较，将最大的数放到末尾。然后再次从头开始。
//  外层循环：表示将最大值放到末尾的趟数。如果只剩一个，而其他的数都放到了末尾，那么这个数就没有必要进行比较，因此 -1。
//  内存循环：表示两两交换的次数。i 表示已经放到末尾的个数，因此需要两两交换的个数变成了 length - i，所以次数为 length - i - 1。

const MaoPao1 = (array) => {
  let count = 0;
  for (let i = 0; i < array.length -1; i++) {
    for (let j = 0; j < array.length - i -1; j++) {
      count++;
      console.log("MaoPao1", "---", count, "---", array[i], array[j]);
      if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
    // console.log(count,'=====',array.toString());
  }
  console.log(count);
  return array;
};

const array = [4,1,3,2,7,5,8,0]
console.log(MaoPao1(array));
