function create(words) {
   let contentElement = document.getElementById('content');

   for (const word of words) {
      let newDiv = document.createElement('div');
      let newParagraph = document.createElement('p');

      newParagraph.textContent = word;
      newParagraph.style.display = 'none';
      newDiv.appendChild(newParagraph);

      newDiv.addEventListener('click', displayParagraph);

      function displayParagraph(e){
         e.currentTarget.children[0].style.display = 'block';
      }
      contentElement.appendChild(newDiv);
      
   }
}