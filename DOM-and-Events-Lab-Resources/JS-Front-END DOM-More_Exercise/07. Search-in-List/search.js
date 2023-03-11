function search() {
   let liElements = document.querySelectorAll('#towns li');
   let searchedElement = document.querySelector('#searchText');
   let resultElement = document.querySelector('#result');
   let counter = 0;
   for (const element of liElements) {
      element.style.textDecoration = 'none';
      element.style.fontWeight = 'normal';
   }

   for (const li of liElements) {
      if (li.textContent.includes(searchedElement.value)){
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
         counter++;
      }
   }
   searchedElement.value = '';
   resultElement.textContent = `${counter} matches found`
}
