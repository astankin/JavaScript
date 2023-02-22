function sortingNums(arr){
    let sortedArr = [];
    while(arr.length > 0){
        let minIdx = 0;
        let maxIdx = 0;

        sortedArr.push(Math.min(...arr))
        minIdx = arr.indexOf(Math.min(...arr))
        arr.splice(minIdx, 1)

        sortedArr.push(Math.max(...arr))
        maxIdx = arr.indexOf(Math.max(...arr))
        arr.splice(maxIdx, 1)
    }
    console.log(sortedArr)
}
sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);