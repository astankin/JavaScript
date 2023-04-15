function solve(input){
    let n = Number(input.shift());
    let data = {};
    for (let index = 0; index < n; index++) {
        let line = input.shift();
        let [assignee, taskId, title, status, estPoints] = line.split(':');
        if (!(assignee in data)){
            data[assignee] = [];
        }
        data[assignee].push({ taskId, title, status, estPoints });
    }
    for (const elem of input) {
        let line = elem.split(':');
        let command = line.shift();
        let assignee = line.shift();
        if (command === 'Add New'){
            let [taskId, title, status, estPoints] = line;
            if (assignee in data){
                data[assignee].push({ taskId, title, status, estPoints });
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command === 'Change Status'){
            let [taskId, newStatus] = line;
            let isFound = false;
            if ( assignee in data ){
                data[assignee].forEach(task => {
                    if ( task.taskId === taskId ){
                        task.status = newStatus;
                        isFound = true;
                    }
                    if (!isFound){
                        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    }
                });
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command === 'Remove Task'){
            let index = Number(line.shift());
            if ( assignee in data ){
                if ( 0 <= index && index < data[assignee].length){
                    data[assignee].splice(index, 1);
                } else {
                    console.log('Index is out of range!');
                }

            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
    }

    let toDo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;
    
    for (const info of Object.values(data)) {
        for (const task of info) {
            if ( task.status === 'ToDo'){
                toDo += Number(task.estPoints);
            } else if ( task.status === 'In Progress'){
                inProgress += Number(task.estPoints);
            } else if ( task.status === 'Code Review'){
                codeReview += Number(task.estPoints);
            } else if ( task.status === 'Done'){
                done += Number(task.estPoints);
            }
        }
    }
    console.log(`ToDo: ${toDo}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

    if ( done >= ( inProgress + codeReview + toDo)){
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }

}
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