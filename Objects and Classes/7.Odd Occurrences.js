function solve(input){
    let inputArr = input.split(' ').map(el => el.toLowerCase());
    let countObj = {};
 
    for (let firstWord of inputArr) {
        let count = 0;
        for (let secondWord of inputArr) {
            if (firstWord === secondWord) {
                count++
            }
        }
        countObj[firstWord] = count;
    }
    let output = "";
    for (const [word, count] of Object.entries(countObj)) {
        if (count % 2 === 1){
            output += word + " ";
        }
    }
    console.log(output);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food')