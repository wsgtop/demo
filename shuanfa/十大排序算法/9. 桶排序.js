/**
 * 桶排序
 * 是计数排序的升级版
 * 
 * 复杂度 简单 
 * 逻辑  
 *   1. 查出数组中的最大值和最小值，确定桶的数量和桶的大小
 *   2. 将元素分别放入不同的桶中
 *   3. 放入桶中的同时使用插入排序对桶中的元素进行排序，或者再元素放入桶中完成后再进行排序
 *   4. 将各个桶中已经排好序元素依次取出
 * 
 * @param {*} arr  数组
 * @param {*} bucketSize   桶的数量
 * @returns
 */
function bucketSort(arr, bucketSize) {
  // 数组没有元素，直接返回
  if (arr.length === 0) return arr;

  let i;
  let minValue = arr[0];
  let maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    // 输入数据的最小值
    if (arr[i] < minValue) minValue = arr[i];
    // 输入数据的最大值
    else if (arr[i] > maxValue) maxValue = arr[i];
  }

  //桶的初始化，设置桶的默认数量为5，若传参定义桶的元素数量，则按照传参的为主
  let DEFAULT_BUCKET_SIZE = 5;
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  // 通过最大值和最小值以及桶中的元素数量，初始化桶的数量
  let buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    // 计算元素应该放入那个桶中,并将元素放入桶中
    const bocketIndex = Math.floor((arr[i] - minValue)/ bucketSize)
    buckets[bocketIndex].push(arr[i]);
  }
  console.log('桶中元素的排序',buckets);


  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    // 对每个桶进行排序，这里使用了插入排序
    insertSort(buckets[i]); 
    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }

  return arr;
}

const array = [4, 1, 35, 2, 70, 5, 801, 0];

console.log(bucketSort(array).toString());

function insertSort(array) {
  let left;
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    left = i - 1;
    let temp = array[i];
    while (left >= 0 && array[left] > temp) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = temp;
  }
  return array;
}