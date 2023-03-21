function solve(arr){
let n = Number((arr)[0]);
let carsInfo = arr.slice(1, n+1);
// console.log(carsInfo);
let cars = {};
for (const elem of carsInfo) {
    let [car, mileage, fuel] = elem.split('|');
    cars[car] = [Number(mileage), Number(fuel)];
}
let commands = arr.slice(n+1, -1);
for (const data of commands) {
    console.log(data);
    let command = (data.split(' : '))[0];
    let car = (data.split(' : '))[1];
    if (command === 'Drive'){
        let distance = Number(data.split(' : ')[2]);
        let fuel = Number(data.split(' : ')[3]);
        if (cars[car][1] < fuel){
            console.log("Not enough fuel to make that ride");
        } else {
            cars[car][0] += distance;
            cars[car][1] -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if (cars[car][0] >= 100000){
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        }
    } else if (command === 'Refuel'){
        pass
    } else if (command === 'Revert'){
        pass
    }
}
}

solve([
    '3',
    'Audi A6|98000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )