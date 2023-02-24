function oddEvenSum(num){
    let numSrt = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for(let n of numSrt){
        n = parseInt(n)
        if (n % 2 === 0){
            evenSum += n
        }else {
            oddSum += n
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234)