function getGrade(grade){
    if(grade < 3){
        console.log("Fail (2)");
    }else if(grade < 3.5){
        console.log(`Poor (${grade.toFixed(2)})`);
    }else if(grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
    }else if(grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);
    }else if(grade >= 5.50){
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

getGrade(3.33)
getGrade(4.50)