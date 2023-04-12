function solve(input){
    let n = Number(input.shift());
    let data = {};
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [assignee, taskId, title, status, estPoints] = line.split(':');
        if (!data.hasOwnProperty(assignee)){        // !data.hasOwnProperty[assignee] -грешка
            data[assignee] = [{ taskId, title, status, estPoints: Number(estPoints) }];
        } else {
            data[assignee].push({ taskId, title, status, estPoints: Number(estPoints) });
            // data[assignee].push([{ taskId, title, status, estPoints: Number(estPoints) }]) - грешката
        }
        
    }

    for (let elem of input) {
        
        let found = false;
        let line = elem.split(':');
        let command = line.shift();
        let assignee = line.shift();
        if (command === 'Add New'){
            let taskId = line.shift();
            let title = line.shift();
            let status = line.shift();
            let estPoints = Number(line.shift());
            if ( !data.hasOwnProperty(assignee) ){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                data[assignee].push({ taskId, title, status, estPoints: estPoints})
            }
        } else if (command === 'Change Status'){
            let taskId = line.shift();
            let newStatus = line.shift();
            if (!data.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                data[assignee].forEach(task =>{
                    if ( task.taskId === taskId ){ // task[taskId] === taskId - грешката
                        task.status = newStatus;
                        found = true;
                    }
                    if (!found){
                        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    }
                })
            }
        } else if (command === 'Remove Task'){
            let index = Number(line.shift());
            if (!data.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                
                if ( index >= 0 && index < data[assignee].length) {
                    data[assignee].splice(index, 1);
                } else {
                    console.log('Index is out of range!');
                }
            }
        }
    }
    let toDo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;

    for (let person of Object.keys(data)) {
        for (let elem of Object.values(data[person])) {
            if (elem.status === 'ToDo'){
                toDo += Number(elem.estPoints);
            } else if ( elem.status === 'In Progress'){
                inProgress += Number(elem.estPoints);
            } else if ( elem.status === 'Code Review'){
                codeReview += Number(elem.estPoints);
            } else if (elem.status === 'Done'){
                done += Number(elem.estPoints);
            }
        }
    }

    console.log(`ToDo: ${toDo}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

    if ( done >= (inProgress + codeReview + toDo)){
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