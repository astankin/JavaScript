function solve(num){
    let num_to_string = String(num);
    let sum = 0;
    for (let i = 0; i < num_to_string.length; i++){
        sum += Number(num_to_string[i])
    }
    console.log(sum)
}
solve(245678)