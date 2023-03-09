function sumTable() {
    let numElements = document.querySelectorAll('tr td:nth-child(2)');
    let result = document.getElementById('sum');
    let nums = Array.from(numElements);
    let sum = 0;
    for (const num of nums) {
        sum += Number(num.textContent);
    }
    result.textContent = sum;

}