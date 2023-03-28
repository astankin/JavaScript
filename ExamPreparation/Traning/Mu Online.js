function solve(input){
    let health = 100;
    let bitcoin = 0;
    let arr = [...input.split('|')];
    let wentTrueAllRooms = true;

    for (let i=0; i < arr.length; i++) {
        let command = arr[i].split(' ')[0];
        let num = Number(arr[i].split(' ')[1]);

        if (command === 'potion'){
            let amount = 0;
            if (health + num > 100){
                amount = 100 - health;
                health = 100; 
            } else {
                health += num;
                amount = num;
            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest'){
            bitcoin += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            health -= num;
            if (health > 0){
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                wentTrueAllRooms = false;
                console.log(`Best room: ${i+1}`);
                break;
            }
        }

    }
    if (wentTrueAllRooms){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoin}`);
        console.log(`Health: ${health}`);
    }
    

}

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")