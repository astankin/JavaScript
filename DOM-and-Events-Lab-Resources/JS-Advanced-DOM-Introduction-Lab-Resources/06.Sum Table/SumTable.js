function sumTable() {
    let liElements = document.querySelectorAll('tr td:nth-child(even)');
    let sum = Array.from(liElements).reduce((a, b) => {
        return a + Number(b.textContent);
    }, 0);
    let result = document.getElementById('sum');
    result.textContent = sum;

}