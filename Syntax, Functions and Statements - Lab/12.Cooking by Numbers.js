function cooking(num, ...arr){
    num = Number(num)
    for (let opr of arr){
        if (opr === "chop"){
            num = num / 2
        }else if (opr === "dice"){
            num = Math.sqrt(num);
        }else if (opr === "spice"){
            num = num + 1;
        }else if (opr === "bake"){
            num = num * 3;
        }else if (opr === "fillet"){
            num = (num * 0.8).toFixed(1);
        }
        console.log(num)
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')