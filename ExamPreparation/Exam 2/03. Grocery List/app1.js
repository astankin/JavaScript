function solve(){
    const url = 'http://localhost:3030/jsonstore/grocery/';
    const loadBtn = document.getElementById('load-product');
    loadBtn.addEventListener('click', loadData);

    const addItemBtn = document.getElementById('add-product');
    addItemBtn.addEventListener('click', addItemHandler);

    const updateProductBtn = document.getElementById('update-product');
    updateProductBtn.addEventListener('click', updateProduct);

    const tbody = document.getElementById('tbody');

    const productElement = document.getElementById('product');
    const countElement = document.getElementById('count');
    const priceElement = document.getElementById('price');

    let info = {};
    let id = '';

    async function loadData(e){
        if (e){
            e.preventDefault();
        }
        const promise = await fetch(url);
        const data = await promise.json();
        tbody.innerHTML = '';

        for (const elem of Object.values(data)) {
    
            let tr = createElement('tr', '', tbody, '', elem._id);
            createElement('td', elem.product, tr, 'name');
            createElement('td', elem.count, tr, 'count-product');
            createElement('td', elem.price, tr, 'product-price');
            let tdBtn = createElement('td', '', tr, 'btn');
            let updateBtn = createElement('button', 'Update', tdBtn);
            updateBtn.addEventListener('click', updateItemHandler);

            let deleteBtn = createElement('button', 'Delete', tdBtn, 'delete');
            deleteBtn.addEventListener('click', deleteItemHandler);

            info[elem._id] = { product: elem.product, count: elem.count, price: elem.price };
        };
    }

    async function updateProduct(){
        let product = productElement.value;
        let count = countElement.value;
        let price = priceElement.value;

        if ( !product || !count || !price ){
            return;
        }
        info[id] = { product, count, price};

        let body = {
            product,
            count,
            price,
        }

        const response = await fetch(`${url}${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        productElement.value = '';
        countElement.value = '';
        priceElement.value = '';

        loadData();
    }

    function updateItemHandler(e){
        id = e.currentTarget.parentElement.parentElement.id;
        console.log(info[id]);
        productElement.value = info[id].product;
        countElement.value = info[id].count;
        priceElement.value = info[id].price;

        updateProductBtn.disabled = false;
        addItemBtn.disabled = true;
    }

    async function addItemHandler(e){
        if ( e ){
            e.preventDefault();
        }
        let product = productElement.value;
        let count = countElement.value;
        let price = priceElement.value;
        if ( !product || !count || !price ){
            return;
        }
        let body = {
            product,
            count, 
            price,
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        productElement.value = '';
        countElement.value = '';
        priceElement.value = '';

        loadData();
    }

    async function deleteItemHandler(e){
        let id = e.currentTarget.parentElement.parentElement.id;
        const response = await fetch(`${url}${id}`,{ 
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(null)});
        loadData();
    }

    function createElement(type, content, parent, className, id){
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
        if (id){
            newElement.id = id;
        }
        return newElement;
    }

}
solve();