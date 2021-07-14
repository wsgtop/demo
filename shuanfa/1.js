function twoSum(nums, target) {
  let _obj = new Map();
  let _len = nums.length;
  for (let i = 0; i < _len; i++) {
    console.log('_obj',_obj);
    const a = target - nums[i]
    if (_obj.has(a)) {
      console.log(_obj.get(a));
      return [_obj.get(a), i];
    } else {
      _obj.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSum([2, 1,5, 5, 11], 10));
