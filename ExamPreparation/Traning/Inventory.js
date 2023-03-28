function solve(input){
    let collection = input.shift().split(', ');
    for (const info of input) {
        let line = info.split(' - ');
        let command = line.shift();
        
        if (command === 'Collect'){
            let item = line.shift();
            if (!collection.includes(item)){
                collection.push(item);
            }
        } else if (command === 'Drop'){
            let item = line.shift();
            if (collection.includes(item)){
                let idx = collection.indexOf(item);
                collection.splice(idx, 1);
            }
        } else if (command === 'Combine Items'){
            let items = line.shift();
            let [oldItem, newItem] = items.split(':');
            if (collection.includes(oldItem)){
                let idx = collection.indexOf(oldItem);
                collection.splice(idx + 1, 0, newItem)
            }
        } else if (command === 'Renew'){
            let item = line.shift();
            let idx = collection.indexOf(item);
            collection.push(collection.splice(idx, 1));
        }
    }
    console.log(collection.join(', '));

}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]  
  );