function extractText() {
    let liTextElements = document.querySelectorAll('#items li');
    let result = document.getElementById('result');
    let liTextArr = Array.from(liTextElements);
    liTextArr.forEach(x => {
        result.value += x.textContent + "\n";
    })
}