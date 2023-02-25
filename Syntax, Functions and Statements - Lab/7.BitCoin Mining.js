function bitcoinCalc(arr){
    let bitcoinsCount = 0;
    let day = 0;
    let gold = 0;
    let money = 0;
    let bitcoinPrice = 11949.16;
    for(let i=1; i <= arr.length; i++){
        let dailyGold = arr[i-1];
        if(i % 3 === 0){
            dailyGold *= 0.7;
        }
        gold += dailyGold;
        money += dailyGold * 67.51;
        if(money >= bitcoinPrice){
            let boughtBitcoins = Math.floor(money / bitcoinPrice);
            bitcoinsCount += boughtBitcoins
            money -= boughtBitcoins * bitcoinPrice;
            if(day === 0){
                day = i
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if(day > 0){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinCalc([100, 200, 300]);
bitcoinCalc([50, 100]);
bitcoinCalc([3124.15, 504.212, 2511.124]);