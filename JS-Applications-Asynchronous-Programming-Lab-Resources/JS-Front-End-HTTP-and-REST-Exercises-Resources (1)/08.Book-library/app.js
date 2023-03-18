function attachEvents() {
  document.getElementById('loadBooks').addEventListener('click', getData);
  document.querySelector('#form button').addEventListener('click', condition);

  let id1 = '';

  let body = {};

  let isEditBtnClicked = false;

  function condition(e){
    if (isEditBtnClicked){
      editBookData(id1, body);
    }else {
      createRecord(e);
    }
  }


function createRecord(e){
  e.preventDefault();
  const titleElement = document.querySelector('input[name="title"]');
  const authorElement = document.querySelector('input[name="author"]');
  if (titleElement.value && authorElement.value){
    let body = {
      "author": authorElement.value,
      "title": titleElement.value,
    }
    postRecord(body);
    titleElement.value = '';
    authorElement.value = '';
  }
}

async function postRecord(body){
  const url = 'http://localhost:3030/jsonstore/collections/books';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        getData();
}

  let tbody = document.querySelector('tbody');

  async function getData(){
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    renderData(data);
  }
  function renderData(data){

    tbody.innerHTML = '';
    Object.entries(data).forEach(([id, book]) => {
      id1 = id;
      let tr = document.createElement('tr');
      let tdTitleElement = document.createElement("td");
      let tdAuthorElement = document.createElement("td");
      let tdButtonsElement = document.createElement("td");
      let editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', editRecord);
      function editRecord(){
        loadEditData(id);
      }


      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', deleteItem)
      function deleteItem(e){
        deleteRow(e);
        deleteRecord(id);
      }

      tdTitleElement.textContent = book.title;
      tr.appendChild(tdTitleElement);

      tdAuthorElement.textContent = book.author;
      tr.appendChild(tdAuthorElement);

      tdButtonsElement.appendChild(editBtn);
      tdButtonsElement.appendChild(deleteBtn);

      tr.appendChild(tdButtonsElement);

      tbody.appendChild(tr);

    })
  }

  async function loadEditData(id){
    // console.log(id);
    isEditBtnClicked = true;

    const url = `http://localhost:3030/jsonstore/collections/books`;
    const response = await fetch(url);
    const data = await response.json();
    const titleElement = document.querySelector('input[name="title"]');
    const authorElement = document.querySelector('input[name="author"]');
    titleElement.value = data[id].title;
    authorElement.value = data[id].author;
    
  }

  async function editBookData(id){

  const titleElement = document.querySelector('input[name="title"]');
  const authorElement = document.querySelector('input[name="author"]');
  if (titleElement.value && authorElement.value){
    body = {
      "author": authorElement.value,
      "title": titleElement.value,
    }
    titleElement.value = '';
    authorElement.value = '';
  }

    
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        console.log(data);
        isEditBtnClicked = false;
        getData();
  }

  function deleteRow(e){
    let tr = e.currentTarget.parentElement.parentElement;
    tr.remove();
  }
  async function deleteRecord(id){
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });
}

}

attachEvents();