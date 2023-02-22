function arrRotate(arr, n){
for (let i = 0; i < n; i++){
    arr.push(arr.shift())
  }
  console.log(arr.join(" "))
}

arrRotate([51, 47, 32, 61, 21], 2);
arrRotate([32, 21, 61, 1], 4);
arrRotate([2, 4, 15, 31], 5);

let numbers = [1, 2, 3, 4, 5, 6, 7]
let evenNums = numbers.filter((num) => num % 2 === 0);
let transformedArr = numbers.map((num) => num * 2);

numbers.forEach((num) => {
    console.log(num);
})