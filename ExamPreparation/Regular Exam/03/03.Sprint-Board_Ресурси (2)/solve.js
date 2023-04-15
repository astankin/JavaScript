// TODO:
function attachEvents() {
  const url = "http://localhost:3030/jsonstore/tasks/";
  const loadBtn = document.getElementById('load-board-btn');
  loadBtn.addEventListener('click', loadData);

  const articleToDo = document.getElementById('todo-section');
  const articleInProgress = document.getElementById('in-progress-section');
  const articleCodeReview = document.getElementById('code-review-section');
  const articleDone = document.getElementById('done-section');

  const addBtn = document.getElementById('create-task-btn');
  addBtn.addEventListener('click', addNewItem);

  const titleElement = document.getElementById('title');
  const descriptionElement = document.getElementById('description');

  let taskInfo = {};

  async function addNewItem(e){
    e.preventDefault();
    let title = titleElement.value;
    let description = descriptionElement.value;
    let status = 'ToDo';
    let body = {
        title, 
        description,
        status,
    }
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    titleElement.value = "";
    descriptionElement.value = "";
    loadData();
  }

  // async function addNewItem() {
  //   let body = {
  //     title: titleElement.value,
  //     description: descriptionElement.value,
  //     status: "ToDo",
  //   };
  //   await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
  //   titleElement.value = "";
  //   descriptionElement.value = "";

  //   loadData();
  // }


  async function loadData(e){
    if (e){
        e.preventDefault();
    }


    const promise = await fetch( url);
    const data = await promise.json();
    
    Array.from(document.querySelectorAll('.task-list')).forEach(ul=>{
        ul.innerHTML = '';
    })

    Object.values(data).forEach(elem => {
        let parent = '';
        let textContent = '';
        if ( elem.status === 'ToDo'){
            parent = articleToDo;
            textContent = 'Move to In Progress';
        } else if ( elem.status === 'In Progress'){
            parent = articleInProgress;
            textContent = 'Move to Code Review';
        } else if ( elem.status === 'Code Review'){
            parent = articleCodeReview;
            textContent = 'Move to Done';
        } else if ( elem.status === 'Done'){
            parent = articleDone;
            textContent = 'Close';
        }
        let ul = parent.querySelector('.task-list');
        
        
        let li = createElement('li', '', ul, 'task', elem._id);
        createElement('h3', elem.title, li);
        createElement('p', elem.description, li);
        let moveBtn = createElement('button', textContent, li);
        moveBtn.addEventListener('click', (e) =>{
            if (e.currentTarget.textContent  === 'Close'){
                deleteItem(e);
            } else {
                moveItem(e);
            }
        });

        taskInfo[elem._id] = elem.status;

        titleElement.value = '';
        descriptionElement.value = '';

    });
    
    
  }

  async function deleteItem(e){
    let parent = e.target.parentElement;
    let id = parent.id;
    const response = await fetch(`${url}${id}`, {
              method: 'DELETE'});
    loadData();
  }

//   async function moveItem(e){
//     let id = e.currentTarget.parentElement.id;
//     let currStatus = taskInfo[id];
//     let newStatus = '';

//     if (currStatus === 'ToDo'){
//         newStatus = 'In Progress';
//     } else if (currStatus = 'In Progress'){
//         newStatus = 'Code Review';
//     } else if (currStatus === 'Code Review' ){
//         newStatus = 'Done';
//     }
//     const response = await fetch(`${url}${id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({status: newStatus})
//     });

//     loadData();
//   }
async function moveItem(e) {
    let id = e.currentTarget.parentElement.id;
    // const resp = await fetch(`${url}${id}`);
    // let task = await resp.json();

    let currStatus = taskInfo[id];
    let status = "";
    if (currStatus === "ToDo") {
      status = "In Progress";
    } else if (currStatus === "In Progress") {
      status = "Code Review";
    } else if (currStatus === "Code Review") {
      status = "Done";
    }

    const response = await fetch(`${url}${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    });

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
