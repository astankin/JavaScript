function findLargestNum(num1, num2, num3) {
    let largest_num;
    if (num1 > num2 && num1 > num3){
        largest_num = num1;
    }
    else if (num2 > num1 && num2 > num3){
        largest_num = num2;
    }
    else if (num3> num1 && num3 > num2){
        largest_num = num3;
    }
    console.log(`The largest number is ${largest_num}.`)
}

findLargestNum(5, -3, 16)