function calc() {
    let firstNumElement = Number(document.getElementById("num1").value);
    let secondNumElement = Number(document.getElementById("num2").value);
    let sum = firstNumElement + secondNumElement;
    let result = document.getElementById("sum");
    result.value = sum;
}
