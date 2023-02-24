function findPositiveOrNegative(num1, num2, num3){
    if ((num1 < 0 && num2 < 0  && num3 < 0) || (num1 > 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num2 > 0 && num3 > 0) || (num1 > 0 && num2 > 0 && num3 < 0)){
        console.log("Negative");
    }else if((num1 < 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num2 > 0 && num3 < 0) || (num1 > 0 && num2 < 0 && num3 < 0) || (num1 > 0 && num2 > 0 && num3 > 0)){
        console.log("Positive");
    }

}


findPositiveOrNegative(5, 12, -15);
findPositiveOrNegative(-6, -12, 14);
findPositiveOrNegative(-1, -2, -3);