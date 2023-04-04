window.addEventListener('load', solve);

function solve() {
   const firstNameElement = document.getElementById('first-name');
   const lastNameElement = document.getElementById('last-name');
   const peopleCountElement = document.getElementById('people-count');
   const fromDateElement = document.getElementById('from-date');
   const daysCountElement = document.getElementById('days-count');

   const nextBtn = document.getElementById('next-btn');
   nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getInputData();
   });

   const ul = document.querySelector('.ticket-info-list');

   let info = {};

   function getInputData(){
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let peopleCount = peopleCountElement.value;
    let fromDate = fromDateElement.value;
    let daysCount = daysCountElement.value;

    if ( !firstName || !lastName || !peopleCount || !fromDate || !daysCount ){
        return;
    }

    info = {
        firstName,
        lastName,
        peopleCount,
        fromDate,
        daysCount,
    }

    let li = createElement('li', '', ul, 'ticket');
    let article = createElement('article', '', li);
    createElement('h3', `Name: ${firstName} ${lastName}`, article );
    createElement('p', `From date: ${fromDate}`, article);
    createElement('p', `For ${daysCount} days`, article);
    createElement('p', `For ${peopleCount} people`, article);

    let editBtn = createElement('button', 'Edit', li, 'edit-btn');
    editBtn.addEventListener('click', editInfoHandler);

    let continueBtn = createElement('button', 'Continue', li, 'continue-btn');
    continueBtn.addEventListener('click', continueHandler);

    firstNameElement.value = '';
    lastNameElement.value = '';
    peopleCountElement.value = '';
    fromDateElement.value = '';
    daysCountElement.value = '';

    nextBtn.disabled = true;

   }

   function continueHandler(e){
    let li = e.currentTarget.parentElement;
    let editBtn = li.querySelectorAll('button')[0];
    let continueBtn = li.querySelectorAll('button')[1];
    editBtn.remove();
    continueBtn.remove();
    li.remove();

    const ulConfirm = document.querySelector('.confirm-ticket');
    let confirmBtn = createElement('button', 'Confirm', li, 'confirm-btn');
    confirmBtn.addEventListener('click', confirmHandler);

    let cancelBtn = createElement('button', 'Cancel', li, 'cancel-btn');
    cancelBtn.addEventListener('click', () =>{
        li.remove();
        nextBtn.disabled = false;
    })

    ulConfirm.appendChild(li);
    
   }

   function confirmHandler(e){
    const divMain = document.getElementById('main');
    divMain.remove();
    const divBody = document.getElementById('body');
    let h1 = createElement('h1', 'Thank you, have a nice day!', divBody);
    h1.id = 'thank-you';

    let backBtn = createElement('button', 'Back', divBody);
    backBtn.id = 'back-btn';
    backBtn.addEventListener('click', () => {
        location.reload();
    })

   }

   function editInfoHandler(e){
    let li = e.currentTarget.parentElement;
    li.remove();

    nextBtn.disabled = false;

    firstNameElement.value = info.firstName;
    lastNameElement.value = info.lastName;
    peopleCountElement.value = info.peopleCount;
    fromDateElement.value = info.fromDate;
    daysCountElement.value = info.daysCount;
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


    
    
