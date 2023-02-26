function solve(num1, num2, operator){
    let result;
    switch(operator){
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "%": result = num1 % num2; break;
        case "**": result = num1 ** num2; break;
    }
    console.log(result)
}
solve(5,6,"+")

function calc(n1, n2, opr){
    let calculation = {
        "+": (n1, n2) => n1 + n2,
        "-": (n1, n2) => n1 - n2,
        "*": (n1, n2) => n1 * n2,
        "/": (n1, n2) => n1 / n2,
        "%": (n1, n2) => n1 % n2,
        "**": (n1, n2) => n1 ** n2,
    }
    console.log(calculation[opr](n1, n2));
}

calc(5,6,"+")