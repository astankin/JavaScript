function solve(arr){
    const n = Number(arr[0]);

    let plants = {};
    for (let i = 1; i <= n; i++) {
        let [flower, rarity] = arr[i].split('<->');
        plants[flower] = [Number(rarity), []];  
    }
    let data = arr.slice(n + 1, -1);
    
    data.forEach(el => {
        let [command, plantInfo] = el.split(': ');
        if (command === "Rate"){
            let [plant, rating] = plantInfo.split(' - ');
            if (!plants.hasOwnProperty(plant)){
                console.log('error');
            }else{
                plants[plant][1].push(Number(rating));
            }
        }else if (command === "Update"){
            let [plant, newRarity] = plantInfo.split(' - ');
            if (!plants.hasOwnProperty(plant)){
                console.log('error');
            }else{
                plants[plant][0] = Number(newRarity);
            }
        }else if (command === "Reset"){
            let plant = plantInfo;
            if (!plants.hasOwnProperty(plant)){
                console.log('error');
            }else{
                plants[plant][1] = [];
            }
        }
    });
    let result = ['Plants for the exhibition:']
    for (const [plant, info] of Object.entries(plants)) {
        let plantLength = info[1].length;
        let averageRating = 0;
        if (plantLength === 0){
            averageRating = 0;
        }else {
            averageRating = (info[1].reduce((a, b) => a + b, 0)) / plantLength;
        }
        result.push(`- ${plant}; Rarity: ${info[0]}; Rating: ${averageRating.toFixed(2)}`)
    }
    console.log(result.join('\n'));

}

// solve(['2',
//     'Candelabra<->10',
//     'Oahu<->10',
//     'Rate: Oahu - 7',
//     'Rate: Candelabra - 6',
//     'Exhibition']);

solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);


// solve(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"]);
