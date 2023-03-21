function solve(arr) {
  let n = Number(arr[0]);
  let carsInfo = arr.slice(1, n + 1);
  // console.log(carsInfo);
  let cars = {};
  for (const elem of carsInfo) {
    let [car, mileage, fuel] = elem.split("|");
    cars[car] = [Number(mileage), Number(fuel)];
  }
  let commands = arr.slice(n + 1, -1);
  for (const data of commands) {
    let command = data.split(" : ")[0];
    let car = data.split(" : ")[1];
    if (command === "Drive") {
      let distance = Number(data.split(" : ")[2]);
      let fuel = Number(data.split(" : ")[3]);
      if (cars[car][1] < fuel) {
        console.log("Not enough fuel to make that ride");
      } else {
        cars[car][0] += distance;
        cars[car][1] -= fuel;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        if (cars[car][0] >= 100000) {
          delete cars[car];
          console.log(`Time to sell the ${car}!`);
        }
      }
    } else if (command === "Refuel") {
      let fuel = Number(data.split(" : ")[2]);
      let refueledLiters = 0;
      if (cars[car][1] + fuel > 75) {
        refueledLiters = 75 - cars[car][1];
        cars[car][1] = 75;
      } else {
        refueledLiters = fuel;
        cars[car][1] += fuel;
      }
      console.log(`${car} refueled with ${refueledLiters} liters`);
    } else if (command === "Revert") {
      let kilometers = Number(data.split(" : ")[2]);
      if (cars[car][0] - kilometers >= 10000) {
        cars[car][0] -= kilometers;
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      } else {
        cars[car][0] = 10000;
      }
    }
  }

  for (const [car, info] of Object.entries(cars)) {
    console.log(`${car} -> Mileage: ${info[0]} kms, Fuel in the tank: ${info[1]} lt.`);
  }
}

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
]);
