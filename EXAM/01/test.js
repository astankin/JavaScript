
function solve(input){
    let n = Number(input.shift());
    let data = {};
    for (let index = 0; index < n; index++) {
        let line = input.shift().split(':')
        let [assignee, taskId, title, status, estPoints] = line;
        if ( !data.hasOwnProperty(assignee)){
            data[assignee] = [];
        }
        data[assignee].push({ taskId, title, status, estPoints });
    }
    for (const line of input) {
        let info = line.split(':')
        let command = info.shift();
        let assignee = info.shift();
        if (command === 'Add New'){
            let [taskId, title, status, estPoints] = info;
            if ( !(assignee in data)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else{
                data[assignee].push({ taskId, title, status, estPoints })
            }
        } else if (command === 'Change Status') {
            let [taskId, newStatus] = info;
            let isFound = false;
            if ( assignee in data ){
                for (const task of data[assignee]) {
                    if (task.taskId === taskId){
                        task.status = newStatus;
                        isFound = true;
                    } 
                    if (!isFound){
                        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    }
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if ( command === 'Remove Task'){
            let index = Number(info.shift());
            if ( assignee in data ){
                if ( 0 <= index && index < data[assignee].length){
                    data[assignee].splice(index, 1);
                } else{
                    console.log('Index is out of range!');
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
    }
    let todo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;

    for (const info of Object.values(data)) {
        for (const task of info) {
            if ( task.status === 'ToDo'){
                todo += Number(task.estPoints);
            } else if ( task.status === 'In Progress'){
                inProgress += Number(task.estPoints);
            } else if ( task.status === 'Code Review'){
                codeReview += Number(task.estPoints);
            } else if (task.status === 'Done'){
                done += Number(task.estPoints);
            }
        }
    }

    console.log(`ToDo: ${todo}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

    if ( done >= (todo + inProgress + codeReview)){
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}
// solve(
//     [
//         '5',
//         'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//         'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//         'Peter:BOP-1211:POC:Code Review:5',
//         'Georgi:BOP-1212:Investigation Task:Done:2',
//         'Mariya:BOP-1213:New Account Page:In Progress:13',
//         'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//         'Change Status:Peter:BOP-1290:ToDo',
//         'Remove Task:Mariya:1',
//         'Remove Task:Joro:1',
//     ]

// )
console.log('////////////////////////////////////////////////////////////')
solve(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]

)