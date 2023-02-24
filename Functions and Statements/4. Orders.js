function calcPrice(order, quantity){
    let menu = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    }
    let price = menu[order] * quantity
    console.log(price.toFixed(2));
}
calcPrice("water", 5)