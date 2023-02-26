function solve(name, lastName, hairColor){
    let personInfo = {
        name, lastName, hairColor
    };
    console.log(JSON.stringify(personInfo));
}
solve('George', 'Jones', 'Brown')