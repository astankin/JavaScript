function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')) // select all buttons
    .forEach(btn => btn.addEventListener('click', onClick)); // addEventlistener to every button 

    function onClick(event){
        let profile = event.currrentTarget.parentElement; // get parent to the clicked button
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
    }
}