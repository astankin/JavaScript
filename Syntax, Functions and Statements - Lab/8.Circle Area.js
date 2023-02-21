function circleAreaCalc(input){
    let input_type = typeof(input)
    if (input_type == "number"){
        console.log((Math.PI * Math.pow(input, 2)).toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${input_type}.`)
    }
}
circleAreaCalc("Hello")
circleAreaCalc(3)