function printElem(arr, n){
    let newArr = [];
    for (let i=0; i<arr.length; i+=n){
        newArr.push(arr[i]);
    }
    return(newArr);
}

console.log(printElem(['5', '20', '31', '4', '20'], 2));
printElem(['dsa','asd', 'test', 'tset'], 2)