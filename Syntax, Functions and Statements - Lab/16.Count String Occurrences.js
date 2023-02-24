function solve(text, word){
    let wordList = text.split(" ");
    let counter = 0;
    for(let i=0; i < text.length; i++){
        if(wordList[i] === word){
            counter += 1
        }
    }
    console.log(counter)
}
solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages', 'softuni')