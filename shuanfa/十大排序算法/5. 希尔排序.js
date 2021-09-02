

function insertSoft(arr){
  for (let index = 1; index < arr.length; index++) {
    const temp = arr[index]
    let left = index -1
    while(left >=0 && arr[left] > temp){
      arr[left+1] = arr[left]
      left--
    }
    arr[left + 1] = temp
  }
  return arr
}




console.log(insertSoft([4, 1, 3, 2, 7, 5, 8, 0]));