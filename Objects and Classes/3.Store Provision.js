function solve(stock, products){
    let obj = {};
    for (let i = 0; i < stock.length - 1; i += 2) {
        let product = stock[i];
        let quantity = stock[i + 1];
        obj[product] = Number(quantity);
    }
    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = products[i + 1];
        if (!(product in obj)){
            obj[product] = 0;
        }
        obj[product] += Number(quantity);
    }
    for (const [product, quantity] of Object.entries(obj)) {
        console.log(`${product} -> ${quantity}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    )