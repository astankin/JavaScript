function solve(word, text){
    let textArr = text.split(" ");
    let isWordFound = false;
    for(let elem of textArr){
        if (elem.toLowerCase() === word){
            console.log(word)
            isWordFound = true;
        }
    }
    if(!isWordFound){
        console.log(`${word} not found!`)
    }
}
solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');