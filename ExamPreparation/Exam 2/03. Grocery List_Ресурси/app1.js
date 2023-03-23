window.addEventListener('load', solve);
function solve(){

    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    document.getElementById('load-product').addEventListener('click', (e) => {
        e.preventDefault();
        loadData();
    });

    const tbody = document.getElementById('tbody');

    async function loadData(){
        const response = await fetch(BASE_URL);
        const data = await response.json();
        renderData(data);
    }

    function renderData(data){

        Object.values(data).forEach((el) => {

            const tr = createElement('tr', '', tbody, el._id);
            createElement('td', el.product, tr, '', 'name');
            createElement('td', el.count, tr, '', 'count-product');
            createElement('td', el.price, tr, '', 'product-price');
            const buttonsTd = createElement('td', '', tr, 'btn');

            createElement('button', 'Update', buttonsTd, '', 'update')
                .addEventListener('click', updateItem);
            
            createElement('button', 'Delete', buttonsTd, '', 'delete')
                .addEventListener('click', deleteItem);


        })
    }

    function updateItem(){
        
    }
    function deleteItem(){

    }

    function createElement(type, content, parent, id, className, src){
        let newElement = document.createElement(type);

        if (content && type === 'input'){
            newElement.value = content;
        } else if (content) {
            newElement.textContent = content;
        }
        if (parent){
            parent.appendChild(newElement);
        }
        if (src){
            newElement.src = src;
        }
        if (className){
            newElement.className = className;
        }
        if (id){
            newElement.id = id;
        }
        return newElement;
    }
}