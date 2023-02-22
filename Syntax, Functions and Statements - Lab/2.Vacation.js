function price_calc(number_of_people, group_type, week_day){
    let price_per_person;
    if (group_type === "Students"){
        let day_price = {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46,
        }
        price_per_person = day_price[week_day]
    }
    else if (group_type === "Business"){
        let day_price = {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16,
        }
        price_per_person = day_price[week_day]
    }
    else if (group_type === "Regular"){
        let day_price = {
            "Friday": 15,
            "Saturday": 20,
            "Sunday": 22.50,
        }
        price_per_person = day_price[week_day]
    }
    let total_price = number_of_people * price_per_person;
    if (group_type === "Students" && number_of_people >= 30){
        total_price *= 0.85;
    }
    else if (group_type === "Business" && number_of_people >= 100){
        total_price -= 10 * price_per_person;
    }
    else if (group_type === "Regular" && (number_of_people >= 10 && number_of_people <= 20)){
        total_price *= 0.95;
    }
    console.log(`Total price: ${total_price.toFixed(2)}`)
}
price_calc(30,"Students","Sunday");
price_calc(40,"Regular","Saturday")