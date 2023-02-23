function solve(text) {
    let result = text.toUpperCase()
      .match(/\w+/g)
      .join(', ');
    
    console.log(result);
  }
  solve('Hi, how are you?')

  function solve1(text){
    let result = text.toUpperCase();
    console.log(result);
    result  = result.match(/\w+/g);
    console.log(result.join(", "));
  }


  solve1('Hi, how are you?')