function solve(arr){
    let data = {};
    for (let i = 0; i < arr.length; i++){
        data[arr[i]] = arr[i].length;
    }
    for (const [employeeName, personalNum] of Object.entries(data)) {
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
};

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )