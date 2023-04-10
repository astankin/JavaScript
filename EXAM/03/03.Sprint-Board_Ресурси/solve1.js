function attachEvents(){
    const url = 'http://localhost:3030/jsonstore/tasks/';

    const loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click', loadData);

    const addBtn = document.getElementById('create-task-btn');
    addBtn.addEventListener('click', uploadNewData);

    const toDoUl = document.querySelector('#todo-section .task-list');
    const inProgressUl = document.querySelector('#in-progress-section .task-list');
    const codeReviewUl = document.querySelector('#code-review-section .task-list');
    const doneUl = document.querySelector('#done-section .task-list');

    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    let dataStatuses = {};

    async function loadData(e){
        if (e) {
            e.preventDefault();
          }
          const response = await fetch(url);
          const data = await response.json();
          renderData(data);
    }
    function renderData(data){
        let parent = '';
        let btnContent = '';

        toDoUl.innerHTML = '';
        inProgressUl.innerHTML = '';
        codeReviewUl.innerHTML = '';
        doneUl.innerHTML = '';

        Object.values(data).forEach((task) => {
            dataStatuses[task._id] = task.status;
            if (task.status === 'ToDo'){
                parent = toDoUl;
                btnContent = 'Move to In Progress';
            } else if (task.status === 'In Progress'){
                parent = inProgressUl;
                btnContent = 'Move to Code Review';
            } else if (task.status === 'Code Review'){
                parent = codeReviewUl;
                btnContent = 'Move to Done';
            } else if (task.status === 'Done'){
                parent = doneUl;
                btnContent = 'Close';
            }
            let li = createElement('li', '', parent, task._id, 'task');
            createElement('h3', task.title, li);
            createElement('p', task.description, li);

            let btn = createElement('button', btnContent, li);
            btn.addEventListener('click', (e) => {
                // console.log(e.currentTarget.textContent);
                if (e.currentTarget.textContent === 'Close'){
                    deleteItem(e);
                } else {
                    moveItem(e);
                }
            });
        });
    }

    async function moveItem(e){
        let id = e.currentTarget.parentElement.id;
        // const resp = await fetch(`${url}${id}`);
        // let task = await resp.json();

        let currStatus = dataStatuses[id];
        let status = "";
        if (currStatus === 'ToDo'){
            status = 'In Progress';
        } else if (currStatus === 'In Progress'){
            status = 'Code Review';
        } else if (currStatus === 'Code Review'){
            status = 'Done';
        }

        const response = await fetch(`${url}${id}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({"status": status}),
          });

    loadData();
    }

    async function deleteItem(e){
        let id = e.currentTarget.parentElement.id;
        const response = await fetch(`${url}${id}`, {
            method: "DELETE",
          });
        loadData();
    }

    function getInputData(){
        let title = titleElement.value;
        let description = descriptionElement.value;
        let status = 'ToDo'

        let body = {
            title,
            description,
            status,
        }
        return body;
    }

    async function uploadNewData(){
        let body = getInputData();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        titleElement.value = '';
        descriptionElement.value = '';

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
        if (className) {
            newElement.className = className;
        }
        if (id){
            newElement.id = id;
        }
        return newElement;
    }

}
attachEvents();