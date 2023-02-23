function calculaton(num1, num2, opr){
    let result = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    }
    console.log(result[opr](num1, num2));
}

calculaton(5, 5, 'multiply')