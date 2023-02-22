function pascalSplitter(string){
    let result = "";
    let temp = "";
    for(let i=0; i < string.length; i++){
        if (string[i] == string[i].toUpperCase() && temp === ""){
            temp += string[i];
        }
        else if (string[i] == string[i].toLowerCase()){
            temp += string[i];
        }
        else {
            result += temp + ", ";
            temp = "";
            temp += string[i]
        }
    }
    result += temp
    console.log(result)
}
pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

function splitString(string){
    let result =  string.split(/(?=[A-Z])/);
    console.log(result.join(', '))
}
splitString('SplitMeIfYouCanHaHaYouCantOrYouCan');