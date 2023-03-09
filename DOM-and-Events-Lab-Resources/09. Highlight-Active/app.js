function focused() {
    let divElements = document.querySelectorAll('div div input');
    let divs = Array.from(divElements);
    for (const div of divs) {
        div.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.classList.add("focused");
        });
        div.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.classList.remove("focused");
        });
    }
}