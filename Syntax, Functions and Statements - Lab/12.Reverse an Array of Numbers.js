function reverceArrey(n, arr){
    let new_arr = [];
    for(let i = 0; i < n; i++){
        new_arr.push(arr[i])
    }
    new_arr.reverse();
    console.log(new_arr.join(' '));
}
reverceArrey(3, [10, 20, 30, 40, 50])

function reverceArreySlicing(n, arr){
    new_arr = arr.slice(0, n)
    new_arr.reverse();
    console.log(new_arr.join(' '));
}
reverceArreySlicing(3, [10, 20, 30, 40, 50])