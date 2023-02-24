function facDivision(num1, num2){
    function facturial(num){
        if(num == 0){
            return 1;
        }else{
            return (num * facturial(num - 1));
        }
    }
    let first = facturial(num1);
    let second = facturial(num2);
    let result = first / second;
    console.log(result.toFixed(2));
}
facDivision(5, 2);
facDivision(6, 2);