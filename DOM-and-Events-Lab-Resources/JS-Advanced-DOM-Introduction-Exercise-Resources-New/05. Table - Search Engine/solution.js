function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedWord = document.getElementById('searchField');
      let rows = document.querySelectorAll('tbody tr');
      let rowsArr = Array.from(rows);
      for (const row of rowsArr) {
         if(row.className === 'select'){
            row.classList.remove('select');
         }
      }
      for (const row of rowsArr) {
         if (searchedWord.value !== '' && row.innerHTML.includes(searchedWord.value)){
            row.className = 'select';
         }
      }
      searchedWord.value = '';

   }
}