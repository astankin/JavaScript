function solve(arr) {
    let tasksNumber = Number(arr.shift());
    let tasksArr = arr.slice(0, tasksNumber);
    let commands = arr.slice(tasksNumber);
    let tasksObj = {};
    let toDoPoints = 0;
    let inProgress = 0;
    let codeReview = 0;
    let donePoints = 0;
    for (const task of tasksArr) {
        let [name, taskId, taskTitle, taskStatus, taskPoints] = task.split(':');
        if (name in tasksObj) {
            tasksObj[name].push({
                taskId,
                taskTitle,
                taskStatus,
                taskPoints
            });
        } else {
            tasksObj[name] = [
                {
                    taskId,
                    taskTitle,
                    taskStatus,
                    taskPoints
                }
            ];
        }
    }
    for (const command of commands) {
 
        if (command.includes('Add New')) {
            let [commandName, assignee, taskId, taskTitle, taskStatus, taskPoints] = command.split(':');
            if (assignee in tasksObj) {
                tasksObj[assignee].push({
                    taskId,
                    taskTitle,
                    taskStatus,
                    taskPoints
                });
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command.includes('Change Status')) {
            let [commandName, assignee, taskId, newStatus] = command.split(':');
            if (assignee in tasksObj) {
                for (const task of tasksObj[assignee]) {
                    if (taskId === task.taskId) {
                        task.taskStatus = newStatus;
                        break;
                    } else {
                        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    }
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command.includes('Remove Task')) {
            let [commandName, assignee, index] = command.split(':');
            if (assignee in tasksObj) {
                if ((index >= 0) && (index < tasksObj[assignee].length)) {
                    tasksObj[assignee].splice(index, 1);
                } else {
                    console.log(`Index is out of range!`);
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
    }
 
    for (const entry of Object.values(tasksObj)) {
        for (const task of entry) {
            if (task.taskStatus === 'ToDo') {
                toDoPoints += Number(task.taskPoints);
            } else if (task.taskStatus === 'In Progress') {
                inProgress += Number(task.taskPoints);
            } else if (task.taskStatus === 'Code Review') {
                codeReview += Number(task.taskPoints);
            } else if (task.taskStatus === 'Done') {
                donePoints += Number(task.taskPoints);
            }
        }
    }
    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${donePoints}pts`);
 
    if (donePoints >= inProgress + codeReview + toDoPoints) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
 
}
 
solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
)