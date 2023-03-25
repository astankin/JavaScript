function solve(input){
    let pirateShipStatus = input.shift().split('>').map(x => Number(x));
    let wareShipStatus = input.shift().split('>').map(x => Number(x));
    let maxHealth = Number(input.shift());
    let stalemate = true;
    for (const 
        data of input) {
        let line = data.split(' ');
        let command = line.shift();
        if (command === 'Fire'){
            let idx = Number(line.shift());
            let damage = Number(line.shift());
            if (0 > idx || idx >= wareShipStatus.length){
                continue;
            }
            wareShipStatus[idx] -= damage;
            if (wareShipStatus[idx] <= 0){
                console.log('You won! The enemy ship has sunken.');
                stalemate = false;
                break;
            }
        } else if (command === 'Defend'){
            let startIdx = Number(line.shift());
            let endIdx = Number(line.shift());
            let damage = Number(line.shift());
            if ((0 > startIdx || startIdx >= pirateShipStatus.length) || (0 > endIdx || endIdx >= pirateShipStatus.length)){
                continue;
            }
            for (let index = startIdx; index <= endIdx; index++) {
                pirateShipStatus[index] -= damage;
                if (pirateShipStatus[index] <= 0){
                    console.log('You lost! The pirate ship has sunken.');
                    stalemate = false
                    break;
                }
            }
        } else if (command === 'Repair'){
            let idx = Number(line.shift());
            let health = Number(line.shift());
            if (0 > idx || idx >= pirateShipStatus.length){
                continue;
            }
            if (pirateShipStatus[idx] + health > maxHealth){
                pirateShipStatus[idx] = maxHealth;
            } else {
                pirateShipStatus[idx] += health;
            }
        } else if (command === 'Status'){
            let count = 0;
            for (const section of pirateShipStatus) {
                if (section < maxHealth * 0.2){
                    count ++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
    if (stalemate){
        console.log(`Pirate ship status: ${pirateShipStatus.reduce((a, b) => a + b, 0)}`);
        console.log(`Warship status: ${wareShipStatus.reduce((a, b) => a + b, 0)}`);
    }
}

solve(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 30 60 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);
