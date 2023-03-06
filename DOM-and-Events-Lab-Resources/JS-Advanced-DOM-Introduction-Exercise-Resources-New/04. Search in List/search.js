function search() {
   let searchedText = document.getElementById('searchText').value;
   let listElements = document.querySelectorAll('#towns li');
   let result = document.getElementById('result')
   let towns = Array.from(listElements);
   let counter = 0;
   for (const town of towns) {
      if (town.textContent.includes(searchedText)){
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }
   result.textContent = `${counter} matches found`
}
