
solve(["John", "Bob", "Christina", "Ema"]);

function solve(arr) {
  arr.sort((a,b) => a.localeCompare(b));
  for(let i = 0; i < input.length;i++){
      console.log(`${i+1}.${input[i]}`);
  }
}