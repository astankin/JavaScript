function printChars(chr1, chr2){
    let result = "";
    let first = Math.min(chr1.charCodeAt(0), chr2.charCodeAt(0));
    let second = Math.max(chr1.charCodeAt(0), chr2.charCodeAt(0));
    for (let i = first + 1 ; i < second; i++){
        result += String.fromCharCode(i) + " "
    }
    console.log(result);
}
printChars("a", "d");
printChars('#', ':');