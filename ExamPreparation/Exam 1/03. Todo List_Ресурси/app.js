function attachEvents(){
  const url = 'http://localhost:3030/jsonstore/tasks/';
  const inputElement = document.getElementById('title');
  const addBtn = document.getElementById('add-button');

  const ul = document.getElementById('todo-list');

  document.getElementById('load-button').addEventListener('click', (e) => {
    e.preventDefault();
    getData();
  });

  async function getData(e){
    if (e){
      e.preventDefault();
    }
    ul.innerHTML = '';

    const url = 'http://localhost:3030/jsonstore/tasks/';
    const response = await fetch(url);
    const data = await response.json();
    renderData(data)
  }

  function renderData(data){
    ul.innerHTML = '';
    Object.values(data).forEach(elem => {
      let li = createElement('li', '', ul, elem._id);
      createElement('span', elem.name, li);
      let removeBtn = createElement('button', 'Remove', li);
      let editBtn = createElement('button', 'Edit', li);
    });

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
    if (className){
        newElement.className = className;
    }
    if (id){
        newElement.id = id;
    }
    return newElement;
}


}
attachEvents();