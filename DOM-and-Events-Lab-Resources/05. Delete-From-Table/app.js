function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let resultElement = document.getElementById('result');
    let emailsElements = document.querySelectorAll('tr td:nth-child(even)');

    
    let emails = Array.from(emailsElements);
    
    // let targetElement = emailElements.find(x => x.textContent == emailInputElement.value);

    for (const email of emails) {
        if (email.textContent == emailInputElement.value){
            email.parentElement.remove();
            resultElement.textContent = 'Deleted.';
            return;
        }
    }
    resultElement.textContent = 'Not found.';

}