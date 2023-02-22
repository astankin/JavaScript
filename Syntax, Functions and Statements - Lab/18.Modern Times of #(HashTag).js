function solve(text){
    let textArr = text.split(" ");
    for(let word of textArr){
        if(word[0] === "#"){
            let condition = true;
            word = word.replace("#", "")
            for(let i=0; i < word.length; i++){
                if(!(/[a-zA-Z]/).test(word[i])){
                 condition = false  
                }
            }
            if(condition && word.length > 0){
                console.log(word)
            }
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')