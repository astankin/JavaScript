function subtract() {
   let firstNumberElement = document.getElementById('firstNumber');
   let secondNumberElement = document.getElementById('secondNumber');
   let resultElement = document.getElementById('result');

   let sum = Number(firstNumberElement.value) - Number(secondNumberElement.value);
   resultElement.textContent = sum;

}