var minSubArrayLen = function (target, nums) {
  // 长度计算一次
  const len = nums.length;
  let l = 0;
  let r = 0;
  let sum = 0;
  let res = len + 1; // 子数组最大不会超过自身
  while (r < len) {
    sum += nums[r++];

    // 窗口滑动
    while (sum >= target) {
      // r始终为开区间 [l, r)
      res = res < r - l ? res : r - l;
      sum -= nums[l++];
    }
  }
  return res > len ? 0 : res;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
