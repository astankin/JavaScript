function printLoadingBar(num){
    let output = "";
    if(num === 100){
        output = "100% Complete!" + "\n" + "[%%%%%%%%%%]";
    }else{
        output = `${num}%` + " " + "[" + '%'.repeat(num / 10) + '.'.repeat(10 - (num / 10)) + "]" + "\n" + "Still loading..."
    }
    console.log(output);
}
printLoadingBar(30);
printLoadingBar(50);
printLoadingBar(100);