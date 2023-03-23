window.addEventListener('load', solve);
function solve(){

    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    document.getElementById('load-product').addEventListener('click', (e) => {
        e.preventDefault();
        loadData();
    });

    let loadBtn = document.getElementById('load-product');
    loadBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        uploadData();
    });

    const productElement = document.getElementById('product');
    const countElement = document.getElementById('count');
    const priceElement = document.getElementById('price');

    function getInputData(){
        let product = productElement.value;
        let count = countElement.value;
        let price = priceElement.value;

        let body = {
            product,
            count,
            price,
        }

        productElement.value = '';
        countElement.value = '';
        priceElement.value = '';

        return body;
    }

    async function uploadData(){
        let body = getInputData();
        const promise = await fetch(BASE_URL,  {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await promise.json();
        loadData();
    }

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
    async function deleteItem(e){
        let parent = e.target.parentElement.parentElement;
        let id = parent.id;
        const url = `http://localhost:3030/jsonstore/grocery/${id}`;
        const response = await fetch(url, {
                  method: 'DELETE'});
        loadData();
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