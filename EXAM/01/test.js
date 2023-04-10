
function solve(input){
    let n = Number(input.shift());
    let data = {};
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [name, taskId, title, status, estPoints] = line.split(':');
        if (!(name in data)){
            data[name] = [];
        }
        data[name].push({ taskId, title, status, estPoints });
    }
    for ( const line of input ) {
        let info = line.split(':');
        let command = info.shift();
        let name = info.shift();
        if (command === 'Add New'){
            let [ taskId, title, status, estPoints ] = info;
            if ( name in data ){
                data[name].push( { taskId, title, status, estPoints } )
            } else{
                console.log(`Assignee ${name} does not exist on the board!`)
            }
        } else if ( command === 'Change Status' ){
            let [ taskId, newStatus ] = info;
            if ( name in data ){
                let isFound = false;
                for ( const task of data[name] ) {
                    if ( task.taskId === taskId){
                        task.status = newStatus;
                        isFound = true;
                    }
                } 
                if ( !isFound ){
                    console.log(`Task with ID ${ taskId } does not exist for ${ name }!`)
                }
            } else{
                console.log(`Assignee ${ name } does not exist on the board!`)
            }
        } else if ( command === 'Remove Task' ){
            let index = Number(info.shift());
            if ( name in data ){
                if ( 0 <= index && index < data[name].length){
                    data[name].splice(index, 1);
                } else {
                    console.log('Index is out of range!');
                }
            } else {
                console.log(`Assignee ${name} does not exist on the board!`)
            }
        }
    }
    let toDo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;

    for (let info of Object.values(data)) {
        for (let value of info) {
            if ( value.status === 'ToDo'){
                toDo += Number(value.estPoints);
            } else if ( value.status === 'In Progress'){
                inProgress += Number(value.estPoints);
            } else if ( value.status === 'Code Review'){
                codeReview += Number(value.estPoints);
            } else if ( value.status === 'Done' ){
                done += Number(value.estPoints);
            }
        }
    }
    console.log(`ToDo: ${toDo}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

    if (done >= inProgress + codeReview + toDo) {
        console.log("Sprint was successful!");
      } else {
        console.log("Sprint was unsuccessful...");
      }
}
solve(
    [
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
// console.log('////////////////////////////////////////////////////////////')
// solve(
//     [
//         '4',
//         'Kiril:BOP-1213:Fix Typo:Done:1',
//         'Peter:BOP-1214:New Products Page:In Progress:2',
//         'Mariya:BOP-1215:Setup Routing:ToDo:8',
//         'Georgi:BOP-1216:Add Business Card:Code Review:3',
//         'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//         'Change Status:Georgi:BOP-1216:Done',
//         'Change Status:Will:BOP-1212:In Progress',
//         'Remove Task:Georgi:3',
//         'Change Status:Mariya:BOP-1215:Done',
//     ]

// )