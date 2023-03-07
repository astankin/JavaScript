function matrix(num){
    let line = "";
    for (let i=0; i < num; i++){
        line += `${num} `.repeat(num) + "\n"
    }
    console.log(line)
}
matrix(3);