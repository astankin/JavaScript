function primeNumber(num){
  for(let i=2; i<num; i++){
    if(num % i === 0){
      return `${num} is not a prime number`
    }
  }
return `${num} is a prime number`
}
console.log(primeNumber(12));