function solve(arr) {
    let coffees = arr.shift().split(' ');
    let n = Number(arr.shift());
    let commands = arr;
    for (const data of commands) {
        let command = data.split(' ')[0];
        if (command === 'Include') {
            let coffee = data.split(' ')[1];
            coffees.push(coffee);
        } else if (command === 'Remove') {
            let firstLast = data.split(' ')[1];
            let count = Number(data.split(' ')[2]);
            if (count > coffees.length) {
                continue;
            }
            if (firstLast === 'first') {
                coffees.splice(0, count);
            } else if (firstLast === 'last') {
                coffees.splice(coffees.length - count, count);
            }
        } else if (command === 'Prefer') {
            let idx1 = Number(data.split(' ')[1]);
            let idx2 = Number(data.split(' ')[2]);
            if ((0 <= idx1 && idx1 <= coffees.length) && (0 <= idx2 && idx2 <= coffees.length)) {
                let coffee1 = coffees[idx1];
                let coffee2 = coffees[idx2];
                coffees.splice(idx1, 1, coffee2);
                coffees.splice(idx2, 1, coffee1);
            }
        } else if (command === 'Reverse') {
            coffees = coffees.reverse();
        }
    }

    console.log('Coffees:');
    console.log(`${coffees.join(' ')}`);


}
solve(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])

solve(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"]);

solve(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"])

