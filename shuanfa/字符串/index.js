// 原地算法

var reverseString = function(s) {
  return s.reverse();
};

var reverseString = function(s) {
  let l = -1, r = s.length;
  while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
  return s;
};

// function t (s){
//   let right = s.length -1
//   let left = 0
//   while(left < right){
//     console.log(s[left],s[right]);
//     [s[left],s[right]] = [s[right],s[left]]
//     left ++
//     right --
//   }
//   return s
// }



const str = 'Hello'
console.log(reverseString(str));