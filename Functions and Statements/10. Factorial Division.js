function facDivision(num1, num2){
    function factorial(num){
        if(num === 0){
            return 1;
        }else{
            return (num * facturial(num - 1));
        }
    }
    let first = factorial(num1);
    let second = factorial(num2);
    let result = first / second;
    console.log(result.toFixed(2));
}
facDivision(5, 2);
facDivision(6, 2);