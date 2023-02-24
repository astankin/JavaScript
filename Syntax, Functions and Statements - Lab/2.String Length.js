function calc(str1, str2, str3){
    let l1 = str1.length; 
    let l2 = str2.length; 
    let l3 = str3.length;
    let sum = [l1, l2, l3].reduce((x, y) => x + y, 0);
    console.log(sum);
    console.log(Math.floor(sum / 3))

}

calc('chocolate', 'ice cream', 'cake')