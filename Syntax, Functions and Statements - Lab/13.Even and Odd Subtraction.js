function solve(arr){
    let even_sum = 0;
    let odd_sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            even_sum += arr[i];
        }
        else{
            odd_sum += arr[i];
        }
    }
    console.log(even_sum - odd_sum)
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9])