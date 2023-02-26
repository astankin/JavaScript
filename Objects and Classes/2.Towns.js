function solve(input){
    let objects = [];
    for (const elem of input) {
        let town = elem.split(' | ')[0];
        let latitude = Number(elem.split(' | ')[1]).toFixed(2);
        let longitude = Number(elem.split(' | ')[2]).toFixed(2);
        let obj = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        };
        objects.push(obj)
    }
    objects.forEach((obj) => console.log(obj));
};

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);