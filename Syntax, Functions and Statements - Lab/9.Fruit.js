function solve(fruit, weight, price_per_kg){
    let needed_money = (weight * price_per_kg) / 1000;
    console.log(`I need $${needed_money.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)