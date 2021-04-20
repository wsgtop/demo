function addX(y) {
  console.log('y',y);
  return function (x) {
    console.log('x+y',x+y);
  };
}
addX(2)(1) // 3