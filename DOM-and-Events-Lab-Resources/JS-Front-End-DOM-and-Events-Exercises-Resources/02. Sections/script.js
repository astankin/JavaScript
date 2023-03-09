function create(words) {
   let contentElement = document.getElementById('content');

   for (const word of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      
      newP.textContent = word;
      newP.style.display = 'none';

      newDiv.appendChild(newP);
      newDiv.addEventListener('click', (e) => {
         e.currentTarget.children[0].style.display = 'block';
      })
      contentElement.appendChild(newDiv);
   }
}