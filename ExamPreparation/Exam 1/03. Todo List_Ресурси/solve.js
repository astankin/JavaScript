// TODO
function attachEvents() {
  document.getElementById('load-button').addEventListener('click', (e) => {
    e.preventDefault();
    loadData();
  });

  document.getElementById('add-button').addEventListener('click', (e) => {
    e.preventDefault();
    uploadData();
  });

  const inputElement = document.getElementById('title');


  const ul = document.getElementById('todo-list');

  async function loadData(){
    ul.innerHTML = '';

    const url = 'http://localhost:3030/jsonstore/tasks/';
    const response = await fetch(url);
    const data = await response.json();
    renderData(data);
  }

  function renderData(data){

    Object.values(data).forEach(task => {
        let li = createElement('li', '', ul, task._id);
        createElement('span', task.name, li);

        let deleteBtn = createElement('button', 'Remove', li);
        deleteBtn.addEventListener('click', deleteItem)

        let editBtn = createElement('button', 'Edit', li);
        editBtn.addEventListener('click', createEditInput)

    });
  }

  function createEditInput(e){
    const parent = e.target.parentElement;
    const value = parent.querySelector("span").textContent;
     
    parent.innerHTML = '';

    let inputElement = createElement('input', '', parent, '', value);
    inputElement.setAttribute('value', value)

    let deleteBtn = createElement('button', 'Remove', parent);
    deleteBtn.addEventListener('click', deleteItem);

    let submitBtn = createElement('button', 'Submit', parent);
    submitBtn.addEventListener('click', uploadEdit);

  }

  async function uploadEdit(e){
    const parent = e.target.parentElement;
    const inputVal = parent.querySelector('input').value;
    const id = parent.id;

    const url = `http://localhost:3030/jsonstore/tasks/${id}`;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: inputVal })
    });
    
    const data = await response.json();
    loadData();
  }

  function getInputData(){
    let title = inputElement.value;
    let body = {
        name: title
    }

    return body;
  }

  async function uploadData(){
    let body = getInputData();
    const url = 'http://localhost:3030/jsonstore/tasks/';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    const data = await response.json();
    loadData(); 
  }

  async function deleteItem(e){
    let parent = e.target.parentElement;
    let id = parent.id;
    const url = `http://localhost:3030/jsonstore/tasks/${id}`;
    const response = await fetch(url, {
                  method: 'DELETE'});
    loadData();
  }

  function createElement(type, content, parent, id, className){
    let newElement = document.createElement(type);

    if (content && type === 'input'){
        newElement.value = content;
    } else if (content) {
        newElement.textContent = content;
    }
    if (parent){
        parent.appendChild(newElement);
    }
    if (id){
        newElement.id = id;
    }
    if (className){
        newElement.className = className;
    }
    return newElement;
}

}

attachEvents();
