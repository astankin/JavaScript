function calcCircleArea(value){
    let value_type = typeof(value);
    if (value_type === 'number'){
        let result = Math.PI * Math.pow(value, 2);
        console.log(result.toFixed(2))
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${value_type}.`)
    }
}
calcCircleArea(5)