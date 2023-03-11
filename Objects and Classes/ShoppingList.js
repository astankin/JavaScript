function solve(arr){
    let products = arr[0].split('!');
    let commands = arr.slice(1);
    while (true){
        let info = commands.shift();
        if ( info == "Go Shopping!"){
            break;
        }
        let [command, product, newItem] = info.split(' ');
        if (command === 'Urgent'){
            if (!products.includes(product)){
                products.unshift(product);
            }
        } else if (command === "Unnecessary"){
            if (products.includes(product)){
                // products = products.filter(x => x !== product)
                let idx = products.indexOf(product);
                products.splice(idx, 1);
            }

        } else if (command === "Correct"){
            if (products.includes(product)){
                let idx = products.indexOf(product);
                products.splice(idx, 1, newItem);
            }
        } else if (command === "Rearrange"){
            if (products.includes(product)){
                let idx = products.indexOf(product);
                products.push(products.splice(idx, 1));
            }
        }

    }
    console.log(products.join(', '));
}

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

