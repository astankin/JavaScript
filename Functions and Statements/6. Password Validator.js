function passwordValidator(str){
    function print(message){
        console.log(message);
    }
    function lengthCheck(pass){
        if(6 <= pass.length && pass.length <= 10){
            return true;
        }else{
            print('Password must be between 6 and 10 characters');
            return false;
        }
    }
    function lettersAndDigitsCheck(pass){
        if ((pass.match(/^[A-Za-z0-9]*$/))){
            return true;
        }else{
            print('Password must consist only of letters and digits');
            return false;
        }
    }
    function digitsCountCheck(pass){
        let digitsCount = 0;
        for(let el of pass){
            if(/\d/.test(el)){
                digitsCount += 1;
            }
        }
        if(digitsCount < 2){
            print('Password must have at least 2 digits');
            return false;
        }else{
            return true;
        }
    }
    let checkLenght = lengthCheck(str);
    let onlyLettersAndDigits = lettersAndDigitsCheck(str);
    let countOfDigits = digitsCountCheck(str);
    if(checkLenght && onlyLettersAndDigits && countOfDigits){
        console.log('Password is valid')
    }
    
}
passwordValidator('logIn');
passwordValidator('MyPass123_');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s')