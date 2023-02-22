function solve(arr){
    if(arr.length != 0){
        arr = arr.sort();
        for(let i=0; i < arr.length; i++)
        console.log(`${i+1}.${arr[i]}`)
    }
}
solve([])