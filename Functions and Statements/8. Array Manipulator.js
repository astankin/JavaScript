function arrayManipulation(arr, commands){
    for (const elem of commands) {
        let data = elem.split(' ');
        let command = data[0];
        if(command === "add"){
            let index = Number(data[1]);
            let el = Number(data[2]);
            arr.splice(index, 0, el);
        }else if (command === "addMany"){
            let index = Number(data[1]);
            let insertElements = data.slice(2).map(Number);
            // arr = arr.slice(0, index).concat(insertElements, arr.slice(index));
            arr.splice(index, 0, ...insertElements);
        }else if (command === "contains"){
            let el = Number(data[1]);
            console.log(arr.indexOf(el));
        }else if (command === "remove"){
            let index = Number(data[1]);
            arr.splice(index, 1);
        }else if (command === "shift"){
            let positions = Number(data[1]);
            for (let index = 0; index < positions; index++) {
                arr.push(arr.shift());
            }
        }else if (command === "sumPairs"){
            let result = [];
            for (let i = 0; i < arr.length - 1; i+=2) {
                result.push(arr[i] + arr[i+1]);
            }
            if (arr.length % 2 === 1){
                result.push(arr.pop())
            }
            arr = result;
        }else if (command === "print"){
            let output = `[ ${arr.join(', ')} ]`;
            console.log(output);
            return;  
        }
    }
}

arrayManipulation([2, 2, 4, 2, 4], 
    ["add 1 4", "sumPairs", "print"]);