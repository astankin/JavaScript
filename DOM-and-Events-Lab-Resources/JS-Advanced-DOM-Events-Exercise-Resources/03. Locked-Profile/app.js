function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))     // create an array with all buttons
    .forEach((btn) => btn.addEventListener('click', onClick));  //  add event listener to every button

    function onClick(ev){
        let profile = ev.target.parentElement;   // get parent element from the clicked button
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked; // check if radio button is checked
        let div = profile.querySelector('div'); // get the hidden div to display

        if (isActive){       
            if (ev.target.textContent == 'Show more'){
                div.style.display = 'block';
                ev.target.textContent = 'Hide it';
            }else {
                div.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
            
        }
    }
}