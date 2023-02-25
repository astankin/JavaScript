const survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ];
  
  let result = survey.every(isSameAnswer);
  
  function isSameAnswer(el, index, arr) {
    if (index === 0) {
      return true;
    } else {
      return (el.answer === arr[index - 1].answer);
    }
  }