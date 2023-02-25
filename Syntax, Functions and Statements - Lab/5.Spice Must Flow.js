function totalAmountCalc(yeldAmount){
    let spices = 0;
    let daysCount = 0;
    while(yeldAmount >= 100){
        spices += yeldAmount - 26;
        yeldAmount -= 10;
        daysCount ++;
    }
    if(spices >= 26){
        spices -= 26;
    }
    console.log(daysCount);
    console.log(spices);
}
totalAmountCalc(111);
totalAmountCalc(450);