window.addEventListener("load", solve);

function solve() {
  
  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', getInputData);

  const makeElement = document.getElementById('make');
  const modelElement = document.getElementById('model');
  const yearElement = document.getElementById('year');
  const fuelElement = document.getElementById('fuel');
  const originalCostElement = document.getElementById('original-cost');
  const selingPriceElement = document.getElementById('selling-price');

  const tbody = document.getElementById('table-body');

  function getInputData(e){
    e.preventDefault();

    let make = makeElement.value;
    let model = modelElement.value;
    let year = yearElement.value;
    let fuel = fuelElement.value;
    let originalCost = Number(originalCostElement.value);
    let selingPrice = Number(selingPriceElement.value);

    if (make && model && year && fuel && originalCost < selingPrice){
      let tr = createElement('tr', '', tbody, 'row');
      createElement('td', make, tr);
      createElement('td', model, tr);
      createElement('td', year, tr);
      createElement('td', fuel, tr);
      createElement('td', originalCost, tr);
      createElement('td', selingPrice, tr);
      let tdBtn = createElement('td', '', tr);

      let editBtn = createElement('button', 'Edit', tdBtn, 'action-btn edit');
      editBtn.addEventListener('click', updateItem);

      let sellBtn = createElement('button', 'Sell', tdBtn, 'action-btn sell');
      sellBtn.addEventListener('click', sellItem);

      makeElement.value = '';
      modelElement.value = '';
      yearElement.value = '';
      fuelElement.value = '';
      originalCostElement.value = '';
      selingPriceElement.value = '';
    }


  }

  function sellItem(e){
    let tr = e.currentTarget.parentElement.parentElement;
    tr.remove();
    let ul = document.getElementById('cars-list');
    let li = createElement('li', '', ul, 'each-list');
    let tdElements = Array.from(tr.querySelectorAll('td'))
    createElement('span', `${tdElements[0].textContent} ${tdElements[1].textContent}`, li);
    createElement('span', `${tdElements[2].textContent}`, li);

    let profit = Number(tdElements[5].textContent) - Number(tdElements[4].textContent);
    createElement('span', `${profit}`, li);

    let totalProfitElement = document.getElementById('profit');
    let totalProfit = Number(totalProfitElement.textContent);
    totalProfitElement.textContent = (profit + totalProfit).toFixed(2);
  }

  function updateItem(e){
    let tr = e.currentTarget.parentElement.parentElement;
    let tdElements = Array.from(tr.querySelectorAll('td'));
    
    makeElement.value = tdElements[0].textContent;
    modelElement.value = tdElements[1].textContent;
    yearElement.value = Number(tdElements[2].textContent);
    fuelElement.value = tdElements[3].textContent;
    originalCostElement.value = Number(tdElements[4].textContent);
    selingPriceElement.value = Number(tdElements[5].textContent);

    tr.remove();
  }



  function createElement(type, content, parent, className){
    let newElement = document.createElement(type);

    if (content && type === 'input'){
        newElement.value = content;
    } else if (content) {
        newElement.textContent = content;
    }
    if (parent){
        parent.appendChild(newElement);
    }
    if (className){
        newElement.className = className;
    }
    return newElement;
}
}
