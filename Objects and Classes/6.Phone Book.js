function solve(arr){
    let phoneBook = {};
    for (const elem of arr) {
        let name = elem.split(" ")[0];
        let phoneNumber = elem.split(" ")[1];
        phoneBook[name] = phoneNumber;
    }
    for (const [name, num] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${num}`);
    }
};

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])