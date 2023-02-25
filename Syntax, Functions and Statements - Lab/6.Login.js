function passwordCheck(passArr){
    let userName = passArr[0];
    let counter = 0;
    for(let i=1; i < passArr.length; i++){
        reversedPass = passArr[i].split("").reverse().join("");
        if(reversedPass === userName){
            console.log(`User ${userName} logged in.`);
        }else{
            counter++;
            if(counter === 4){
                console.log(`User ${userName} blocked!`);
            }
            else{
                console.log("Incorrect password. Try again.");
            }
        }
    }
}
passwordCheck(['Acer','login','go','let me in','recA']);
passwordCheck(['sunny','rainy','cloudy','sunny','not sunny']);