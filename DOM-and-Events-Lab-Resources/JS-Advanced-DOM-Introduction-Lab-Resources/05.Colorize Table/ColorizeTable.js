function colorize() {
    let tdElements = document.querySelectorAll('table tr:nth-child(even)');
    let tdElementsArr = Array.from(tdElements);
    tdElementsArr.forEach(x => {
            x.style.backgroundColor = 'teal';
        })
}