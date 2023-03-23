window.addEventListener("load", solve);
function solve() {
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const genderElement = document.getElementById('genderSelect');
  const dishInfoElement = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', getData);

  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clearData);

  const counter = document.getElementById('progress-count');

  const ulInProgress = document.getElementById('in-progress');
  const ulFinished = document.getElementById('finished')

  function clearData(){
    ulFinished.innerHTML = '';
    let liElements = document.querySelectorAll('#in-progress li');
    counter.textContent = liElements.length;
  }
  function getData(e) {
    e.preventDefault();

    firstName = firstNameElement.value;
    lastName = lastNameElement.value;
    gender = genderElement.value;
    age = ageElement.value;
    dishInfo = dishInfoElement.value;
    if (firstName && lastName && gender && age && dishInfo) {
      let li = createElement('li', '', ulInProgress, 'each-line');
      let article = createElement('article', '', li)
      createElement('h4', `${firstName} ${lastName}`, article);
      createElement('p', `${gender}, ${age}`, article);
      createElement('p', `Dish description: ${dishInfo}`, article);
      let editBtn = createElement('button', 'Edit', li, 'edit-btn');
      editBtn.addEventListener('click', editData);

      let completedBtn = createElement('button', 'Mark as complete', li, 'complete-btn');
      completedBtn.addEventListener('click', completeHandler);


      counter.textContent = Number(counter.textContent) + 1;

      firstNameElement.value = '';
      lastNameElement.value = '';
      ageElement.value = '';
      dishInfoElement.value = '';
    }
  }
  function editData(e){
    let parentLi = e.target.parentElement;
    firstNameElement.value = (parentLi.querySelector('h4').textContent).split(' ')[0];
    lastNameElement.value = (parentLi.querySelector('h4').textContent).split(' ')[1];
    ageElement.value = Number(((parentLi.querySelectorAll('p')[0]).textContent).split(', ')[1]);
    genderElement.value = ((parentLi.querySelectorAll('p')[0]).textContent).split(', ')[0];

    let index = parentLi.querySelectorAll('p')[1].textContent.indexOf(': ');
    let info = function solve() {
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const genderElement = document.getElementById('genderSelect');
  const dishInfoElement = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', getData);

  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clearData);

  const counter = document.getElementById('progress-count');

  const ulInProgress = document.getElementById('in-progress');
  const ulFinished = document.getElementById('finished')

  function clearData(){
    ulFinished.innerHTML = '';
    let liElements = document.querySelectorAll('#in-progress li');
    counter.textContent = liElements.length;
  }
  function getData(e) {
    e.preventDefault();

    firstName = firstNameElement.value;
    lastName = lastNameElement.value;
    gender = genderElement.value;
    age = ageElement.value;
    dishInfo = dishInfoElement.value;
    if (firstName && lastName && gender && age && dishInfo) {
      let li = createElement('li', '', ulInProgress, 'each-line');
      let article = createElement('article', '', li)
      createElement('h4', `${firstName} ${lastName}`, article);
      createElement('p', `${gender}, ${age}`, article);
      // if (dishInfo.includes('Dish description: ')){
      //   createElement('p', `${dishInfo}`, article);
      // } else {
      //   createElement('p', `Dish description: ${dishInfo}`, article);
      // }
      createElement('p', `Dish description: ${dishInfo}`, article);
      let editBtn = createElement('button', 'Edit', li, 'edit-btn');
      editBtn.addEventListener('click', editData);

      let completedBtn = createElement('button', 'Mark as complete', li, 'complete-btn');
      completedBtn.addEventListener('click', completeHandler);


      counter.textContent = Number(counter.textContent) + 1;

      firstNameElement.value = '';
      lastNameElement.value = '';
      ageElement.value = '';
      dishInfoElement.value = '';
    }
  }
  function editData(e){
    let parentLi = e.target.parentElement;
    firstNameElement.value = (parentLi.querySelector('h4').textContent).split(' ')[0];
    lastNameElement.value = (parentLi.querySelector('h4').textContent).split(' ')[1];
    ageElement.value = Number(((parentLi.querySelectorAll('p')[0]).textContent).split(', ')[1]);
    genderElement.value = ((parentLi.querySelectorAll('p')[0]).textContent).split(', ')[0];

    let index = parentLi.querySelectorAll('p')[1].textContent.indexOf(': ');
    dishInfoElement.value = parentLi.querySelectorAll('p')[1].textContent.slice(index + 2);
    parentLi.remove();
    
    counter.textContent = Number(counter.textContent) - 1;
  }

  function completeHandler(e){
    let parentLi = e.target.parentElement;
    let editBtn = parentLi.querySelector('.edit-btn');
    editBtn.remove();

    let delBtn = parentLi.querySelector('.complete-btn');
    delBtn.remove();

    parentLi.remove();
    let ul = document.getElementById('finished');
    ul.appendChild(parentLi);
    counter.textContent = Number(counter.textContent) - 1;
  }

  function createElement(type, content, parent, className) {
    let newElement = document.createElement(type);

    if (content && type === 'input') {
      newElement.value = content;
    } else if (content) {
      newElement.textContent = content;
    }
    if (parent) {
      parent.appendChild(newElement);
    }
    if (className) {
      newElement.className = className;
    }

    return newElement;
  }


}

    dishInfoElement.value = info;

    parentLi.remove();
    counter.textContent = Number(counter.textContent) - 1;
  }

  function completeHandler(e){
    let parentLi = e.target.parentElement;
    let editBtn = parentLi.querySelector('.edit-btn');
    editBtn.remove();

    let delBtn = parentLi.querySelector('.complete-btn');
    delBtn.remove();

    parentLi.remove();
    let ul = document.getElementById('finished');
    ul.appendChild(parentLi);
    counter.textContent = Number(counter.textContent) - 1;
  }

  function createElement(type, content, parent, className) {
    let newElement = document.createElement(type);

    if (content && type === 'input') {
      newElement.value = content;
    } else if (content) {
      newElement.textContent = content;
    }
    if (parent) {
      parent.appendChild(newElement);
    }
    if (className) {
      newElement.className = className;
    }

    return newElement;
  }


}
