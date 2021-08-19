// 原地移除数组
const removeElement = (arr, val) => {
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[left] = arr[i];
      left++;
    }
  }

  return arr;
};

function reversal(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr
}
var array = [1, 2, 3, 4, 5, 6,7];

const res = removeElement([3, 2, 2, 3], 3);
const res2 = reversal(array);

console.log(res, res2);
