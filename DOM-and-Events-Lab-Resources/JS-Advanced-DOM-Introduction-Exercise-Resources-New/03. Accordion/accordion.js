function toggle() {
    let buttonElement = document.querySelector('.button');
    let extraText = document.querySelector('#extra');
    if (buttonElement.textContent === "More"){
        buttonElement.textContent = "Less";
        extraText.style.display = 'block';
    } else {
        buttonElement.textContent = "More";
        extraText.style.display = 'none';
    }

}