function arrRotate(arr, n){
for (let i = 0; i < n; i++){
    arr.push(arr.shift())
  }
  console.log(arr.join(" "))
}

arrRotate([51, 47, 32, 61, 21], 2);
arrRotate([32, 21, 61, 1], 4);
arrRotate([2, 4, 15, 31], 5);

