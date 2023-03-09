let collection = [
    {name: "Ivan", age: 18},
    {name: "Petar", age: 25},
    {name: "Gosho", age:  15},
    {name: "Stoqn", age:  36},
    {name: "Dragan", age:  39},
    {name: "Dragan", age:  19}
];

let name = collection.find((x) => x.name == "Dragan");
console.log(name);