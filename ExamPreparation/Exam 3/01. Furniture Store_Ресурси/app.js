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

        //TO DO CHECK IF NUMBER AND EMPTY FIELD

        let tr1 = createElement('tr', '', tbody, 'info');
        createElement('td', model, tr1);
        createElement('td', price.toFixed(2), tr1);

        let tdBtn = createElement('td', '', tr1);
        let moreInfoBtn = createElement('button', 'More Info', tdBtn, 'moreBtn');
        moreInfoBtn.addEventListener('click', moreInfoHandler);

        let buyBtn = createElement('button', 'Buy it', tdBtn, 'buyBtn');

        let tr2 = createElement('tr', '', tbody, 'hide');
        createElement('td', `Year: ${year}`, tr2);
        createElement('td', `Description: ${description}`, tr2);

    }

    function moreInfoHandler(e){
        let moreInfoBtn = e.currentTarget;
        moreInfoBtn.textContent = 'Les info';
        let parent = e.currentTarget.parentElement.parentElement.parentElement;
        console.log(parent);
        let hideTr = parent.querySelector('.hide');
        hideTr.style.display = "contents";
        let td = hideTr.querySelectorALL('td')[1];
        td.setAttribute('colspan', 3);

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
