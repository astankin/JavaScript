window.addEventListener('load', solve);

function solve() {
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const labelElement = document.getElementById('label');
    const estPointElement = document.getElementById('points');
    const assigneeElement = document.getElementById('assignee');

    const createTaskBtn = document.getElementById('create-task-btn');
    createTaskBtn.addEventListener('click', addNewTask);

    const deleteBtn = document.getElementById('delete-task-btn');
    deleteBtn.addEventListener('click', deleteTask);

    let section = document.getElementById('tasks-section');

    let totalPointsElement = document.getElementById('total-sprint-points');

    let n = 0;
    let tasks = {};
    let id = '';
    let totalPoints = 0;

    function addNewTask(e){
        e.preventDefault();
        n++;
        let title = titleElement.value;
        let description = descriptionElement.value;
        let label = labelElement.value;
        let points = estPointElement.value;
        let assignee = assigneeElement.value;

        tasks[`task-${n}`] = { title, description, label, points, assignee };
        totalPoints += Number(points);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`

        if ( !title || !description || !label || !points || !assignee){
            return;
        }

        let textContent = '';
        let className = '';
        if ( label === 'Feature'){
            textContent = 'Feature &#8865;';
            className = 'feature';
        } else if ( label === 'Low Priority Bug'){
            textContent = 'Low Priority Bug &#9737;';
            className = 'low-priority'
        } else if ( label === 'High Priority Bug' ){
            textContent = 'High Priority Bug &#9888;';
            className = 'high-priority';
        }

        let article = createElement('article', '', section, 'task-card', `task-${n}`);
        let div1 = createElement('div', '', article, `task-card-label ${className}`);
        div1.innerHTML = textContent;
        createElement('h3', title, article, 'task-card-title');
        createElement('p', description, article, 'task-card-description');
        createElement('div', `Estimated at ${points} pts`, article, 'task-card-points');
        createElement('div', `Assigned to: ${assignee}`, article, 'task-card-assignee');
        let divBtn = createElement('div', '', article, 'task-card-actions');
        let btn = createElement('button', 'Delete', divBtn);
        btn.addEventListener('click', onDelete);

        clearInputFields();
    }

    function onDelete(e){
        id = e.currentTarget.parentElement.parentElement.id;
        titleElement.value = tasks[id].title;
        descriptionElement.value = tasks[id].description;
        labelElement.value = tasks[id].label;
        estPointElement.value = Number(tasks[id].points);
        assigneeElement.value = tasks[id].assignee;

        createTaskBtn.disabled = true;
        deleteBtn.disabled = false;
        
        labelElement.disabled = true;
        titleElement.disabled = true;
        descriptionElement.disabled = true;
        labelElement.disabled = true;
        estPointElement.disabled = true;
        assigneeElement.disabled = true;
    }

    function clearInputFields(){
        titleElement.value = '';
        descriptionElement.value = '';
        labelElement.value = '';
        estPointElement.value = '';
        assigneeElement.value = '';
    }
    function deleteTask(){
        let article = document.getElementById(id);
        article.remove();

        createTaskBtn.disabled = false;
        deleteBtn.disabled = true;

        
        labelElement.disabled = false;
        titleElement.disabled = false;
        descriptionElement.disabled = false;
        labelElement.disabled = false;
        estPointElement.disabled = false;
        assigneeElement.disabled = false;

        totalPoints -= Number(tasks[id].points);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`

        clearInputFields();
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