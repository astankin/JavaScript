function solve() {
 let textElementSelector = document.getElementById('text');
 let textElement = textElementSelector.value;

 let namingConventionSelector = document.getElementById('naming-convention');
 let namingConvention = namingConventionSelector.value;

 let result = document.getElementById('result');
 let textArr = textElement.split(' ');
 let printResult = '';

 function convention(n, arr) {
  let output = '';
  for (let i = n; i < arr.length; i++){
    output += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return output;
 }

 if (namingConvention === "Camel Case"){
    printResult = textArr[0].toLowerCase();
    printResult += convention(1, textArr)

 }else if (namingConvention === "Pascal Case"){
    printResult = convention(0, textArr)

 }else {
    printResult = 'Error!'
 }
 result.textContent = printResult;
 textElementSelector.value = '';
 namingConventionSelector.value = '';
}