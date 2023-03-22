window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const genderElement = document.getElementById('genderSelect');
  const dishInfoElement = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', getData);

  const counter = document.getElementById('progress-count');


  function getData(e) {
    e.preventDefault();
    console.log(dishInfoElement.value);

    firstName = firstNameElement.value;
    lastName = lastNameElement.value;
    gender = genderElement.value;
    age = ageElement.value;
    dishInfo = dishInfoElement.value;
    if (firstName && lastName && gender && age && dishInfo) {
      const ul = document.getElementById('in-progress');
      let li = createElement('li', '', ul, 'each-line');
      let article = createElement('article', '', li)
      let h4 = createElement('h4', `${firstName} ${lastName}`, article);
      let p1 = createElement('p', `${gender},  ${age}`, article);
      let p2 = createElement('p', `Dish description: ${dishInfo}`, article);
      let editBtn = createElement('button', 'Edit', li, 'edit-btn');
      let completedBtn = createElement('button', 'Mark as complete', li, 'complete-btn');


      counter.textContent = Number(counter.textContent) + 1;

      firstNameElement.value = '';
      lastNameElement.value = '';
      ageElement.value = '';
      genderElement.value = '';
      dishInfoElement.value = '';
    }
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
