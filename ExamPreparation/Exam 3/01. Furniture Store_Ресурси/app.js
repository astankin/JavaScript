window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        getInputData();
    }) ;

    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceElement = document.getElementById('price');

    const tbody = document.getElementById('furniture-list');

    function getInputData(){
        let model = modelElement.value;
        let year = yearElement.value;
        let description = descriptionElement.value;
        let price = Number(priceElement.value);

        if (!model || !description || !year || !price){
           return;  
        }
        if (Number(year) < 0){
            return;
        }
        if (Number(price) < 0){
            return;
        }

        let tr1 = createElement('tr', '', tbody, 'info');
        createElement('td', model, tr1);
        createElement('td', price.toFixed(2), tr1);

        let tdBtn = createElement('td', '', tr1);
        let moreInfoBtn = createElement('button', 'More Info', tdBtn, 'moreBtn');
        moreInfoBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info'){
                moreInfoHandler(e);
            } else {
                lessInfoHandler(e);
            }
        });

        let buyBtn = createElement('button', 'Buy it', tdBtn, 'buyBtn');
        buyBtn.addEventListener('click', buyItem);

        let tr2 = createElement('tr', '', tbody, 'hide');
        createElement('td', `Year: ${year}`, tr2);
        createElement('td', `Description: ${description}`, tr2);

        modelElement.value = '';
        yearElement.value = '';
        descriptionElement.value = '';
        priceElement.value = '';

    }

    function buyItem(e){
        let tr = e.currentTarget.parentElement.parentElement;
        let price = Number(tr.querySelectorAll('td')[1].textContent);
        console.log(price);
        tr.nextSibling.remove();
        tr.remove();
        let totalPriceElement = document.querySelector('.total-price');
        let totalPrice = Number(totalPriceElement.textContent);
        totalPriceElement.textContent = (totalPrice + price).toFixed(2)
        
    }

    function moreInfoHandler(e){
        
        let parent = e.currentTarget.parentElement.parentElement;
        e.currentTarget.textContent = 'Less Info';
        
        let hideTr = parent.nextSibling;
        hideTr.style.display = "contents";
        let td = hideTr.querySelectorAll('td')[1];
        td.setAttribute('colspan', 3);

    }
    function lessInfoHandler(e){
        e.currentTarget.textContent = 'More Info';
        let grandpParent = e.currentTarget.parentElement.parentElement;
        let hideTr = grandpParent.nextSibling;
        hideTr.style.display = "none";
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
