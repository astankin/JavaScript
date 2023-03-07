function subtract(num1, num2, num3){
    function sum(num1, num2){
        return num1 + num2;
    }
    console.log(sum(num1, num2) - num3);
}
subtract(23, 6, 10);

function subtratArrow(num1, num2, num3) {
    const sum = (first, second) => first + second;
    const substract = (sum, third) => sum - third;
    return substract(sum(num1, num2), num3)
 } 

 subtratArrow(23, 6, 10);