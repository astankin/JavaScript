function calc(num1, num2, op){
 let result;
 switch(op){
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
 }
 console.log(result)
}
calc(3, 5.5, '*')