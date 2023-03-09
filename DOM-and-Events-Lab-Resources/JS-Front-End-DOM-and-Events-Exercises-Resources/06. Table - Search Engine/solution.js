function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedWord = document.getElementById('searchField');
      let rowElements = document.querySelectorAll('tbody tr');
      let rows = Array.from(rowElements);

      for (const row of rows){
         if (row.className === 'select'){
            row.classList.remove('select');
         }
      }
      for (const row of rows) {
         if (searchedWord.value !== '' && row.textContent.includes(searchedWord.value)){
            row.className = 'select';
            break;
         }
      }
      searchedWord.value = '';

   }
}