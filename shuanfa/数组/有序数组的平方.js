// 必须数一个有序的数组
// 从左到右数组由小到大
function test(array) {
  let result = [];
  for (let i = 0, j = array.length - 1; i <= j; ) {
    const left = Math.abs(array[i]); // 数组的第一个元素
    const right = Math.abs(array[j]); // 数组的最后一个元素
    if (left < right) {
      //
      result.unshift(right * right);
      j--;
    } else {
      result.unshift(left * left);
      i++;
    }
  }
  return result;
}

function test1(array) {
  const result = [];
  let i = 0;
  let j = array.length - 1;
  while (i <= j) {
    const left = Math.abs(array[i]);
    const right = Math.abs(array[j]);
    if (left < right) {
      result.unshift(right * right);
      j--;
    } else {
      result.unshift(left * left);
      i++;
    }
  }
  return result
}
const res1 = test([-12, -4, -1, 0, 3, 10, 11]);
const res2 = test1([-12, -4, -1, 0, 3, 10, 11]);
// const res2 = test([-7, -3, 2, 3, 11]);
// const res11 = sortedSquares([-7, -3, 2, 3, 11]);
// console.log(res1, res2);
console.log(res1,res2);
