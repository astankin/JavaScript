function arrayManipulation(arr, commands){
    for (const elem of commands) {
        let data = elem.split(' ');
        let command = data[0];
        if(command === "add"){
            let index = Number(data[1]);
            let el = data[2];
            arr.splice(index, 0, el);
            console.log(arr);
        }else if (command === "addMany"){
            let index = Number(data[1]);
            let inserElements = data.slice(2).map(Number);
            arr = arr.slice(0, index).concat(inserElements, arr.slice(index));
        }else if (command === "contains"){
            let el = Number(data[1]);
            console.log(arr.indexOf(el));
        }else if (command === "remove"){
            let index = Number(data[1]);
             
        }else if (command === "shift"){
            pass
        }else if (command === "sumPairs"){
            pass
        }else if (command === "print"){
            pass
        }
    }
};

arrayManipulation([1, 2, 4, 5, 6, 7],
    ['addMany 2 9 8 7 6 5', 'contains 5', 'contains 3', 'print']
    );