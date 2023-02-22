function print_table(num){
    let output = "";
    for (let i=1; i<=10; i++){
        let result = num * i
        output += `${num} X ${i} = ${result}\n`
    }
    console.log(output)
}

print_table(5)