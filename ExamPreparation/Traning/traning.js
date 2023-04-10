function solve(input) {
    let grocery = input.shift().split('!');
    for (let data of input) {
        let line = data.split(' ');
        let command = line.shift();
        let item = line.shift();
        if (command === 'Urgent'){
            if ( !grocery.includes(item) ){
                grocery.unshift(item);
            }
        } else if ( command === 'Unnecessary' ){
            if (grocery.includes(item)){
                let index = grocery.indexOf(item);
                grocery.splice(index, 1);
            }
        } else if ( command === 'Correct'){
            let newItem = line.shift();
            if (grocery.includes(item)){
                let index = grocery.indexOf(item);
                grocery.splice(index, 1, newItem);
            }
        } else if ( command === 'Rearrange'){
            if (grocery.includes(item)){
                let idx = grocery.indexOf(item);
                grocery.push(grocery.splice(idx, 1))
            }
        }
    }

    console.log(grocery.join(', '));
}

solve(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);


