function extractText() {
    let listElements = document.querySelectorAll('ul li');
    let result = document.getElementById('result');
    let listElemArr = Array.from(listElements);
    listElemArr.forEach(x => {
        result.textContent += x.textContent + "\n";
    })
}