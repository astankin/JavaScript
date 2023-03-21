window.addEventListener('load', solve);
function solve(){
    document.getElementById('load-product').addEventListener('click', (e) => {
        e.preventDefault();
        loadData();
    });
    

    let addBtn = document.getElementById('add-product').addEventListener('click', (e) => {
        e.preventDefault();
        uploadData();
    });

    const productElement = document.getElementById('product');
    const countElement = document.getElementById('count');
    const priceElement = document.getElementById('price');

    function getData(){
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

        let body = getData();
        const url = 'http://localhost:3030/jsonstore/grocery/';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        loadData();
    }

    const tbody = document.getElementById('tbody');

    async function loadData(){
        tbody.innerHTML = '';

        const url = 'http://localhost:3030/jsonstore/grocery/';
        const response = await fetch(url);
        const data = await response.json();
        renderData(data);
    }

    function renderData(data){

        Object.values(data).forEach((el) => {

            const tr = createElement('tr', '', tbody, el._id);
            createElement('td', el.product, tr, '', 'name');
            createElement('td', el.count, tr, '', 'count-product');
            createElement('td', el.price, tr, '', 'product-price');
            let tdBtn = createElement('td', '', tr, '', 'btn');

            let updateBtn = createElement('button', 'Update', tdBtn, '', 'update');
            updateBtn.addEventListener('click', getDataForUpdate);

            let deleteBtn = createElement('button', 'Delete', tdBtn, '', 'delete');
            deleteBtn.addEventListener('click', deleteItem);


        });
    }

    function getDataForUpdate(e){
        let parent = e.target.parentElement.parentElement;
        let id = parent.id;

        let updateProductBtn = document.getElementById('update-product');
        updateProductBtn.addEventListener('click', (e) => {
            e.preventDefault();
            updateData(id);
        })

        updateProductBtn.disabled = false;
        document.getElementById('add-product').disabled = true;


        let product = parent.querySelector('.name').textContent;
        let count = parent.querySelector('.count-product').textContent;
        let price = parent.querySelector('.product-price').textContent;

        productElement.value = product;
        countElement.value = count;
        priceElement.value = price;
    }

    async function updateData(id){
        let body = getData();
        const url = `http://localhost:3030/jsonstore/grocery/${id}`;
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        loadData();
    }


    async function deleteItem(e){
        let parent = e.target.parentElement.parentElement;
        let id = parent.id;
        console.log(id);
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