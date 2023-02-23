function sortingNums(arr) {
  let sortedArr = [];
  while (arr.length > 0) {
    arr.sort((a, b) => a - b);
    sortedArr.push(arr.shift());
    if(arr.length === 0){
        break;
    }
    arr.sort((a, b) => b - a);
    sortedArr.push(arr.shift());
  }
  return sortedArr;
}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
