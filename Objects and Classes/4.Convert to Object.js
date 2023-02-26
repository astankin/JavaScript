function solve(jsonStr){
    let person = JSON.parse(jsonStr);
    for (const [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
};

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}')