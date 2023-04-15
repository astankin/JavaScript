window.addEventListener('load', solve);

function solve(){
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const labelElement = document.getElementById('label');
    const estPointsElement = document.getElementById('points');
    const assigneeElement = document.getElementById('assignee');

    const createBtn = document.getElementById('create-task-btn');
    createBtn.addEventListener('click', getInputData);

    const section = document.getElementById('tasks-section');
    const totalPointsElement = document.getElementById('total-sprint-points');

    const delTaskBtn = document.getElementById('delete-task-btn');
    delTaskBtn.addEventListener('click', deleteItemHandler)

    const hiddenInput = document.getElementById('task-id');

    let tasks = {};
    let totalPoints = 0;
    let n = 0;
    let id = '';

    function getInputData(e){
        e.preventDefault();
        n++;

        let title = titleElement.value;
        let description = descriptionElement.value;
        let label = labelElement.value;
        let estPoints = estPointsElement.value;
        let assignee = assigneeElement.value;

        if ( !title || !description || !label || !estPoints || !assignee){
            return;
        }

        totalPoints += Number(estPoints);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

        let textContent = '';
        let className = '';
        if (label === 'Feature'){
            textContent = 'Feature ⊡';
            className = 'feature';
        } else if (label === 'Low Priority Bug'){
            textContent = 'Low Priority Bug ☉';
            className = 'low-priority';
        } else if ( label === 'High Priority Bug' ){
            textContent = 'High Priority Bug ⚠';
            className = 'high-priority';
        }

        tasks[`task-${n}`] = { title, description, label, estPoints, assignee };

        hiddenInput.value += `task-${n}`;

        let article = createElement('article', '', section, `task-${n}`, 'task-card');
        let div1 = createElement('div', textContent, article, '', `task-card-label ${className}`);
        // div1.innerHTML = `Feature &#8865;`;
        createElement('h3', title, article, '', 'task-card-title');
        createElement('p', description, article, '', 'task-card-description');
        createElement('div', `Estimate at ${estPoints} pts`, article, '', 'task-card-points');
        createElement('div', `Assigned to: ${assignee}`, article, '', 'task-card-assignee');
        let divBtn = createElement('div', '', article, '', 'task-card-actions');
        let btn = createElement('button', 'Delete', divBtn);
        btn.addEventListener('click', deleteItem)

        clearFields();

    }


    function deleteItem(e){
        id = e.currentTarget.parentElement.parentElement.id;

        titleElement.value = tasks[id].title;
        descriptionElement.value = tasks[id].description;
        labelElement.value = tasks[id].label;
        estPointsElement.value = Number(tasks[id].estPoints);
        assigneeElement.value = tasks[id].assignee;

        delTaskBtn.disabled = false;
        createBtn.disabled = true;

        titleElement.disabled = true;
        descriptionElement.disabled = true;
        labelElement.disabled = true;
        estPointsElement.disabled = true;
        assigneeElement.disabled = true;
    }

    function deleteItemHandler(){
        let article = document.getElementById(id);
        article.remove();

        delTaskBtn.disabled = true;
        createBtn.disabled = false;

        titleElement.disabled = false;
        descriptionElement.disabled = false;
        labelElement.disabled = false;
        estPointsElement.disabled = false;
        assigneeElement.disabled = false;

        totalPoints -= tasks[id].estPoints;
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

        clearFields();
    }

    function clearFields(){
        titleElement.value = '';
        descriptionElement.value = '';
        labelElement.value = '';
        estPointsElement.value = '';
        assigneeElement.value = '';
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