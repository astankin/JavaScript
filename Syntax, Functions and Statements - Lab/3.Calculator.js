function calc(num1, oper, num2){
    let result;
    if (oper === "+"){
        result = num1 + num2
    }else if (oper === "-"){
        result = num1 - num2
    }
    else if (oper === "*"){
        result = num1 * num2
    }else if (oper === "/"){
        result = num1 / num2
    }

    console.log(result.toFixed(2));
}
calc(5,'+',10);
calc(25.5,'-', 3)