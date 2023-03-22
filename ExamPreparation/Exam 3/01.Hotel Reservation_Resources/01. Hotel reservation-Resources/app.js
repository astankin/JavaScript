window.addEventListener('load', solve);

function solve() {
        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', loadData);

        const firstNameElement = document.getElementById('first-name');
        const lastNameElement = document.getElementById('last-name');
        const dateInElement = document.getElementById('date-in');
        const dateOutElement = document.getElementById('date-out');
        const peopleCountElement =document.getElementById('people-count');


        function loadData(e){
            e.preventDefault();
            if (!firstNameElement.value || !lastNameElement.value || !dateInElement.value || !dateOutElement.value || !peopleCountElement.value){
                return;
            }
    
            const ul = document.querySelector('.info-list');
            let li = createElement('li', '', ul, 'reservation-content');
            let article = createElement('article', '', li)
            createElement('h3', `Name: ${firstNameElement.value} ${lastNameElement.value}`, article);
            createElement('p', `From date: ${dateInElement.value}`, article);
            createElement('p', `To date: ${dateOutElement.value}`, article);
            createElement('p', `For ${peopleCountElement.value} people`, article);

            let editBtn = createElement('button', 'Edit', li, 'edit-btn');
            editBtn.addEventListener('click', loadEditData);

            let continueBtn = createElement('button', 'Continue', li, 'continue-btn');
            continueBtn.addEventListener('click', continueHandler);

            nextBtn.disabled = true;

            firstNameElement.value = '';
            lastNameElement.value = '';
            dateInElement.value = '';
            dateOutElement.value = '';
            peopleCountElement.value = '';
        }

        function continueHandler(e){
            let li = e.target.parentElement;
            let ulConfirm = document.querySelector('.confirm-list');
            let editBtn = li.querySelector('.edit-btn');
            editBtn.remove();

            let continueBtn = li.querySelector('.continue-btn');
            continueBtn.remove();

            let confirmBtn = createElement('button', 'Confirm', li, 'confirm-btn');
            confirmBtn.addEventListener('click', confirmHandler);

            let cancelBtn = createElement('button', 'Cancel', li, 'cancel-btn');
            cancelBtn.addEventListener('click', cancelHandler)

            ulConfirm.appendChild(li);
            document.querySelector('.info-list').innerHTML = '';

        }
        function cancelHandler(e){
            let ul = e.target.parentElement.parentElement;
            ul.innerHTML = '';
            let h1 = document.querySelector('#verification');
            h1.className = "reservation-cancelled";
            h1.textContent = "Cancelled.";

            nextBtn.disabled = false;
        }

        function confirmHandler(e){
            let ul = e.target.parentElement.parentElement;
            ul.innerHTML = '';
            let h1 = document.querySelector('#verification');
            h1.className = "reservation-confirmed";
            h1.textContent = "Confirmed.";
            nextBtn.disabled = false;
        }

        function loadEditData(e){
            let parentElement = e.target.parentElement;
            let firstName = ((parentElement.querySelector('h3').textContent).split(': ')[1]).split(' ')[0];
            let lastName = ((parentElement.querySelector('h3').textContent).split(': ')[1]).split(' ')[1];
            let dateIn =  (((parentElement.querySelectorAll('p')[0]).textContent).split(': ')[1]);
            let dateOut =  (((parentElement.querySelectorAll('p')[1]).textContent).split(': ')[1]);
            let guestsCount = (((parentElement.querySelectorAll('p')[2]).textContent).split(' ')[1]);
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            dateInElement.value = dateIn;
            dateOutElement.value = dateOut;
            peopleCountElement.value = guestsCount;

            document.querySelector('.info-list').innerHTML = '';

            nextBtn.disabled = false;
        }

        function createElement(type, content, parent, className){
            let newElement = document.createElement(type);
    
            if (content && type === 'input'){
                newElement.value = content;
            } else if (content) {
                newElement.textContent = content;
            }
            if (parent){
                parent.appendChild(newElement);
            }
            if (className){
                newElement.className = className;
            }
            return newElement;
        }


    }



    
    
