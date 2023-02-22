function solve(num){
    let condition = true;
    let myArr = String(num).split("").map((num)=>{
        return Number(num)
    })
    for (let i = 0; i < myArr.length - 1; i++){
        if (myArr[i] != myArr[i+1]){
            condition = false;
        }
    }
    if (condition == true){
        console.log("true");
    }
    else{
        console.log("false");
    }
    console.log(myArr.reduce((a, b) => a + b, 0));
}
solve(2222222);
solve(1234);