function reveal(words, text){
    let wordsList = words.split(", ");
    let textList = text.split(" ");
    for (let i = 0; i < textList.length; i++){
        for(let word of wordsList){
            if(textList[i].includes("*") && textList[i].length === word.length){
                textList[i] = word;
            }
        }
    }
    console.log(textList.join(' '))
}
// reveal('great', 'softuni is ***** place for learning new programming languages');
reveal('great, learning', 'softuni is ***** place for ******** new programming languages')

