function repestString(str, count){
    let result = "";
    for(let i=1; i <= count; i++ ){
        result += str
    }
    console.log(result)
}

repestString("abc", 3)

function repeatStr(str, n){
    console.log(str.repeat(n));
}
repeatStr("abc", 3)

console.log("*".repeat(3));