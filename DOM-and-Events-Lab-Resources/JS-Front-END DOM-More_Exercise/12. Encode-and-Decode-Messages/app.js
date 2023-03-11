function encodeAndDecodeMessages() {
  let textAreasElements = document.querySelectorAll("textarea");
  let input = textAreasElements[0];
  console.log(input);
  let output = textAreasElements[1];

  let buttonElements = document.querySelectorAll("button");

  let encodeBtn = buttonElements[0];
  encodeBtn.addEventListener("click", encode);

  let decodeBtn = buttonElements[1];
  decodeBtn.addEventListener("click", decode);

  function encode() {
    let result = "";
    for (const char of input.value) {
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    }
    output.value = result;
    input.value = '';
  }
  function decode(){
    let result = "";
    for (const char of output.value) {
      result += String.fromCharCode(char.charCodeAt(0) - 1);
    }
    output.value = result;
  }
}
