function solve(input){
    let n = Number(input.shift());
    let heroesCollection = {}
    for (let index = 0; index < n; index++) {
        let [heroName, HP, MP] = input.shift().split(' ');
        heroesCollection[heroName] = { HP: Number(HP), MP: Number(MP) };   
    }
    for (const data of input) {
        let line = data.split(' - ');
        let command = line.shift();
        let heroName = line.shift();
        if (command === 'CastSpell'){
            let MPNeeded = Number(line.shift());
            let spellName = line.shift();
            if (heroesCollection[heroName].MP >= MPNeeded){
                heroesCollection[heroName].MP -= MPNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesCollection[heroName].MP} MP!`);
            } else{
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage'){
            let damage = Number(line.shift());
            let attacker = line.shift();
            if (heroesCollection[heroName].HP - damage > 0){
                heroesCollection[heroName].HP -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesCollection[heroName].HP} HP left!`);
            } else{
                delete heroesCollection[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        } else if (command === 'Recharge'){
            let amount = Number(line.shift());
            let recoveredAmount = 0;
            if (heroesCollection[heroName].MP + amount > 200){
                recoveredAmount = 200 - heroesCollection[heroName].MP;
                heroesCollection[heroName].MP = 200;
            } else {
                recoveredAmount = amount;
                heroesCollection[heroName].MP += amount;
            }
            console.log(`${heroName} recharged for ${recoveredAmount} MP!`);
        } else if (command === 'Heal'){
            let amount = Number(line.shift());
            let recoveredAmount = 0;
            if (heroesCollection[heroName].HP + amount > 100){
                recoveredAmount = 100 - heroesCollection[heroName].HP;
                heroesCollection[heroName].HP = 100;
            } else {
                recoveredAmount = amount;
                heroesCollection[heroName].HP += amount;
            }
            console.log(`${heroName} healed for ${recoveredAmount} HP!`);
        }
    }

    let output = [];
    for (const [hero, info] of Object.entries(heroesCollection)) {
        output.push(`${hero}`);
        output.push(`  HP: ${info.HP}`);
        output.push(`  MP: ${info.MP}`);
    }
    console.log(output.join('\n'));
}

solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    ])

