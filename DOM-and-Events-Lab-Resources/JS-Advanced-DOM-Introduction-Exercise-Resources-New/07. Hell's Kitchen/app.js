function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let text = JSON.parse(document.querySelector('#inputs textarea').value);
      text.forEach(element => {
         console.log(element);
      });
   }
}