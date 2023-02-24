function findPalindrome(nums){
    for(let num of nums){
        let numArr = String(num).split("").map((num) => Number(num))
        let rotatedArr = "";
        for(let j = numArr.length - 1; j >= 0; j --){
            rotatedArr += numArr[j]
        }
        if(numArr.join("") === rotatedArr){
            console.log("true");
        }else{
            console.log("false");
        }
    }
}

findPalindrome([123,323,421,121]);
findPalindrome([32,2,232,1010])