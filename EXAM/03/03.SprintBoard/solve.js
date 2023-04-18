// TODO:
function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/tasks/';

    const loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click', loadData);

    const toDo = document.getElementById('todo-section');
    const inProgress = document.getElementById('in-progress-section');
    const codeReview = document.getElementById('code-review-section');
    const done = document.getElementById('done-section');

    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    const addTaskBtn = document.getElementById('create-task-btn');
    addTaskBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addTask();
    });

    async function loadData(){
        const response = await fetch(url);
        const data = await response.json();
        renderData(data);
    }
    function renderData(data){
        toDo.innerHTML = '';
        inProgress.innerHTML = '';
        codeReview.innerHTML = '';
        done.innerHTML = '';

        let parent = '';
        let textContent = '';
        Object.values(data).forEach(elem =>{
            if (elem.status === 'ToDo'){
                parent = toDo;
                textContent = 'Move to In Progress';
            } else if (elem.status === 'In Progress'){
                parent = inProgress;
                textContent = 'Move to Code Review';
            } else if (elem.status === 'Code Review'){
                parent = codeReview;
                textContent = 'Move to Done';
            } else if (elem.status === 'Done'){
                parent = done;
                textContent = 'Close';
            }
            let ul = parent.querySelector('.task-list');
            console.log(ul);
            let li = createElement('li', '', ul, 'task', `${elem._id}`);
            createElement('h3', `${elem.title}`, li);
            createElement('p', `${elem.description}`, li);
            let btn = createElement('button', textContent, li);
            btn.addEventListener('click', moveTask);
        })
    }
    async function deleteItem(e){
        let parent = e.currentTarget.parentElement;
        let id = parent.id;
        const response = await fetch(`${url}${id}`, {
                  method: 'DELETE'});
        loadData();
    }
    async function moveTask(e){
        if( e.currentTarget.textContent === 'Close'){
            deleteItem(e);
        };
        let parent = e.currentTarget.parentElement;
        let id = parent.id;
        const responseItem = await fetch(`${url}${id}`);
        const data = await responseItem.json();
        let title = data.title;
        let description = data.description;
        let status = data.status;

        let newStatus = '';
        if (status === 'ToDo'){
            newStatus = 'In Progress';
        } else if (status === 'In Progress'){
            newStatus = 'Code Review';
        } else if (status === 'Code Review'){
            newStatus = 'Done';
        }
        status = newStatus;
        let body = {
            title,
            description,
            status,
        }
        
        const response = await fetch(`${url}${id}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
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
        return(body);
    }

    async function addTask(){
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
    function createElement(type, content, parent, className, id){
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