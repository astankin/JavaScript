
window.addEventListener('load', solve);

function solve() {
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const labelElement = document.getElementById('label');
    const pointsElement = document.getElementById('points');
    const assigneeElement = document.getElementById('assignee');

    const createTaskBtn = document.getElementById('create-task-btn');
    createTaskBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        getInputData();
    });

    const totalPointsElement = document.getElementById('total-sprint-points');
    

    const deleteTaskBtn = document.getElementById('delete-task-btn');
    deleteTaskBtn.addEventListener('click', deleteTask)

    const taskSection = document.getElementById('tasks-section')
    let n = 0;
    let tasks = {};
    let delId = '';
    let totalPoints = 0;

    function deleteTask(){
        let parent = document.getElementById(`${delId}`);
        parent.remove();
        titleElement.disabled = false;
        descriptionElement.disabled = false;
        labelElement.disabled = false;
        pointsElement.disabled = false;
        assigneeElement.disabled = false;

        titleElement.value = '';
        descriptionElement.value = '';
        labelElement.value = '';
        pointsElement.value = '';
        assigneeElement.value = '';

        deleteTaskBtn.disabled = true;
        createTaskBtn.disabled = false;

        
        totalPoints -= Number(tasks[delId].points);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

    }

    function getInputData(){
        n += 1;
        let title = titleElement.value;
        let description = descriptionElement.value;
        let label = labelElement.value;
        let points = pointsElement.value;
        let assignee = assigneeElement.value;

        if (!title || !description || !label || !points || !assignee){
            return;
        }
        let priority = '';
        let classType = ''

        if (label === 'Feature'){
            priority = 'Feature: ⊡';
            classType = 'feature';
        } else if ( label === 'Low Priority Bug'){
            priority = 'Low Priority Bug ☉';
            classType = 'low-priority';
        } else if ( label === 'High Priority Bug'){
            priority = 'High Priority Bug: ⚠';
            classType = 'high-priority';
        }


        let article = createElement('article', '', taskSection, `task-${n}`, 'task-card');
        createElement('div', `${priority}`, article, '', `task-card-label ${classType}`);
        createElement('h3', `${title}`, article, '', 'task-card-title');
        createElement('p', `${description}`, article, '', 'task-card-description');
        createElement('div', `Estimate at ${points} pts`, article, '', 'task-card-points');
        createElement('div', `Assigned to: ${assignee}`, article, '', 'task-card-assignee');
        let divBtn = createElement('div', '', article, '' ,'task-card-actions');
        let deleteBtn = createElement('button', 'Delete', divBtn);
        deleteBtn.addEventListener('click', deleteItem);

        tasks[`task-${n}`] = { title, description, label, points, assignee};

        
        totalPoints += Number(points);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

        titleElement.value = '';
        descriptionElement.value = '';
        labelElement.value = '';
        pointsElement.value = '';
        assigneeElement.value = '';

    }

    function deleteItem(e){
        let parent = e.currentTarget.parentElement.parentElement;
        let id = parent.id;
        delId = id;
        titleElement.value = tasks[id].title;
        descriptionElement.value = tasks[id].description;
        labelElement.value = tasks[id].label;
        pointsElement.value = Number(tasks[id].points);
        assigneeElement.value = tasks[id].assignee;


        deleteTaskBtn.disabled = false;
        createTaskBtn.disabled = true;
        titleElement.disabled = true;
        descriptionElement.disabled = true;
        labelElement.disabled = true;
        pointsElement.disabled = true;
        assigneeElement.disabled = true;
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