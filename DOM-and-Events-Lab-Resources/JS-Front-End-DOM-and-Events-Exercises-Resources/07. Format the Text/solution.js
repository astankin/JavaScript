function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');
  let textArr = input.value.split('.').filter(s => s !== '');

  while (textArr.length > 0){
    let p = document.createElement("p");
    let text = textArr.splice(0, 3).join('. ') + '.';
    p.textContent = text;
    console.log(text);
    output.appendChild(p);
  }
}