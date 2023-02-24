function ticketPriceCalc(day_type, age){
    let price;
    if (age >= 0 && age <= 18){
        switch(day_type){
            case "Weekday": price = "12$"; break;
            case "Weekend": price = "15$"; break;
            case "Holiday": price = "5$"; break;
        }
    }
    else if (age > 18 && age <= 64){
        switch(day_type){
            case "Weekday": price = "18$"; break;
            case "Weekend": price = "20$"; break;
            case "Holiday": price = "12$"; break;
        }
    }
    else if (age > 64 && age <= 122){
        switch(day_type){
            case "Weekday": price = "12$"; break;
            case "Weekend": price = "15$"; break;
            case "Holiday": price = "10$"; break;
        }
    }
    else{
        price = "Error!"
    }
    console.log(price)
}
ticketPriceCalc("Weekday", 18)
ticketPriceCalc("Weekend", 19)
ticketPriceCalc("Weekend", -12)