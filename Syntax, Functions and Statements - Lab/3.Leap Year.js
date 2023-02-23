function find_leap_year(number){
    if ((number % 4 == 0 && number % 100 != 0) || number % 400 == 0 ){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}

find_leap_year(1984)
find_leap_year(2003)
find_leap_year(4)