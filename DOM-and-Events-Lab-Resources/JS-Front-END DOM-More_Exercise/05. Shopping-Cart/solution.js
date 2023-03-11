function solve() {
   Array.from(document.querySelectorAll('.add-product'))
   .forEach(x => {
      x.addEventListener('click', addItem)
   });
   let result = document.querySelector('textarea');
   let totalPrice = 0;
   let boughtItems = [];
   function addItem(e){
      let parentDiv = e.currentTarget.parentElement.parentElement;
      let productName = parentDiv.querySelector('.product-title').textContent;
      let productPrice = parentDiv.querySelector('.product-line-price').textContent;
      
      result.textContent += `Added ${productName} for ${productPrice} to the cart.\n`
      totalPrice += Number(productPrice);
      if (!boughtItems.includes(productName)){
         boughtItems.push(productName)
      }
   }
   let checkOutBtn = document.querySelector('.checkout');
   checkOutBtn.addEventListener('click', checkOut);

   function checkOut(e){
      result.textContent += `You bought ${boughtItems.join(', ')} for ${totalPrice.toFixed(2)}.`;
      Array.from(document.querySelectorAll('button'))
      .forEach(x => {
         x.disabled = true;
      });
   }
   
}