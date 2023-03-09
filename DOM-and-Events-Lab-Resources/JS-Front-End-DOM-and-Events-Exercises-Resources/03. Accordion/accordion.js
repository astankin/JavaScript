function toggle() {
    let buttonElement = document.querySelector('.head .button');
    let text = document.getElementById('extra');
    if (buttonElement.textContent === 'More') {
        text.style.display = "block";
        buttonElement.textContent = "Less";
    } else {
        text.style.display = "none";
        buttonElement.textContent = "More";
    }


}