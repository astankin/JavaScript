function solve(arr){
    let meetings = {};
    for (const elem of arr) {
        let weekDay = elem.split(" ")[0]; 
        let name = elem.split(" ")[1];
        if(!(weekDay in meetings)){
            meetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }else{
            console.log(`Conflict on ${weekDay}!`);
        }
    }
    for (const [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
};

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)