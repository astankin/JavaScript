function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')) // select all buttons
    .forEach(btn => btn.addEventListener('click', onClick)); // addEventlistener to every button 

    function onClick(event){
        let profile = event.target.parentElement; // get parent to the clicked button
        let div = profile.querySelector('div'); // selecting the div element to be showen
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked; // check if radio button is checked

        if (isActive){
            if (event.target.textContent == "Show more"){
                div.style.display = 'block';
                event.target.textContent = "Hide it";
            }else {
                div.style.display = 'none';
                event.target.textContent = 'Show more'
            }
        }
    }
}