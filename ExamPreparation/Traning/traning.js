function solve(input){
    const n = Number(input.shift());
    let cars = {};
    for (let i = 0; i < n; i++) {
        let line = input.shift().split('|');
        let [car, mileage, fuel] = line;
        cars[car] = { mileage: Number(mileage), fuel: Number(fuel)}; 
    }

    input.forEach(elem => {
        let line = elem.split(' : ');
        let command = line.shift();
        let car = line.shift();
        if (command === 'Drive'){
            let distance = Number(line.shift());
            let fuelNeeded = Number(line.shift());
            if (fuelNeeded > cars[car].fuel){
                console.log('Not enough fuel to make that ride');
            } else {
                cars[car].mileage += distance;
                cars[car].fuel -= fuelNeeded;                
                console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                if (cars[car].mileage >= 100000){
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
        } else if ( command === 'Refuel'){
            let fuel = Number(line.shift());
            let refueledLiters = 0;
            if (cars[car].fuel + fuel > 75){
                refueledLiters = 75 - cars[car].fuel;
            } else {
                refueledLiters = fuel;
            }
            cars[car].fuel += refueledLiters;
            console.log(`${car} refueled with ${refueledLiters} liters`);
        } else if ( command === 'Revert'){
            let kilometers = Number(line.shift());
            let amountReverted = 0;
            if (cars[car].mileage - kilometers < 10000){
                amountReverted = cars[car].mileage - 10000;
                cars[car].mileage = 10000;
            } else {
                cars[car].mileage -= kilometers;
                amountReverted = kilometers;
                console.log(`${car} mileage decreased by ${amountReverted} kilometers`);
            }
        }


    });

    for (const [car, info] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${info.mileage} kms, Fuel in the tank: ${info.fuel} lt.`);
    }

}
solve([
    '3',
    'Audi A6|38000|62',
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
  );

  console.log('///////////////////////////////////////');

  solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )