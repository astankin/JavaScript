function solve(input) {
    let citiesInfo = {};
    while (true) {
        let data = input.shift();
        if (data === 'Sail') {
            break;
        }
        let line = data.split('||');
        let city = line.shift();
        let population = Number(line.shift());
        let gold = Number(line.shift());
        if (!citiesInfo.hasOwnProperty(city)) {
            citiesInfo[city] = { population, gold };
        } else {
            citiesInfo[city].population += population;
            citiesInfo[city].gold += gold;
        }
    }
    for (const event of input) {
        let row = event.split('=>')
        let command = row.shift();
        let town = row.shift();
        if (command === 'Plunder') {
            let people = Number(row.shift());
            let gold = Number(row.shift());
            citiesInfo[town].population -= people;
            citiesInfo[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (citiesInfo[town].population === 0 || citiesInfo[town].gold === 0) {
                delete citiesInfo[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            let gold = Number(row.shift());
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                citiesInfo[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesInfo[town].gold} gold.`);
            }

        }
    }
    let entries = Object.entries(citiesInfo);
    let output = [];
    if (entries.length > 0) {
        output.push([`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`]);

        for (const [town, info] of entries) {
            output.push(`${town} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`)
        }
    } else {
        output.push("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
    console.log(output.join('\n'));

}

solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
