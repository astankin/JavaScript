function prinAndSum(n, m){
    let output = "";
    let sum = 0;
    for (let i=n; i <= m; i++){
        output += i + " ";
        sum += i
    }
    console.log(output)
    console.log(`Sum: ${sum}`)
}
prinAndSum(5,10);
prinAndSum(0, 26)