function solve(){
    document.getElementById('load-product').addEventListener('click', getData);
    const addProductBtn = document.getElementById('add-product');
    addProductBtn.addEventListener('click', addProduct);

    const productName = document.getElementById('product');
    const count = document.getElementById('count');
    const price = document.getElementById('price');

    function addProduct(e){
        e.preventDefault();
        
        if (!productName.value || !count.value || !price.value){
            return;
        }

        let body = {
            product: productName.value,
            count: count.value,
            price: price.value,
        }
        productName.value = '';
        count.value = '';
        price.value = ''; 
        postNewProduct(e, body);
    }

    async function postNewProduct(e, body){
        const url = 'http://localhost:3030/jsonstore/grocery/';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();

        getData(e);
    }

    async function getData(e){
        e.preventDefault();
        const url = 'http://localhost:3030/jsonstore/grocery/';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        renderProducts(data);
    }
    function renderProducts(data){
        const tbody = document.getElementById('tbody');
        tbody.innerHTML = '';
        Object.values(data).forEach((item) => {
            let tr = createElement('tr', '', tbody, '', item._id);
            createElement('td', item.product, tr, 'name');
            createElement('td', item.count, tr, 'count-product');
            createElement('td', item.price, tr, 'product-price');
            let buttonsParent = createElement('td', '', tr, 'btn');
            let updateBtn = createElement('button', 'Update', buttonsParent, 'update');
            updateBtn.addEventListener('click', updateData);

            let deleteBtn = createElement('button', 'Delete', buttonsParent, 'delete');
            deleteBtn.addEventListener('click', deleteItem);
 
        });
    }


    let id = ''; 

    function updateData(e){
        let updateProductBtn = document.getElementById('update-product');
        updateProductBtn.addEventListener('click', () => {
            uploadUpdatedData(e, id);
        });

        updateProductBtn.disabled = false;
        addProductBtn.disabled = true;

        let tr = e.currentTarget.parentElement.parentElement;
        id = tr.id;
        console.log(id);


        productName.value = tr.children[0].textContent;
        count.value = tr.children[1].textContent;
        price.value = tr.children[2].textContent;
        
        
        async function uploadUpdatedData(e, id){
            let body = {
                product: document.getElementById('product').value,
                count: document.getElementById('count').value,
                price: document.getElementById('price').value,
            }
            const url = `http://localhost:3030/jsonstore/grocery/${id}`;
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
            const data = await response.json();
            getData(e);
        }
        
    }


    function deleteItem(e) {
        let tr = e.currentTarget.parentElement.parentElement;
        let id = tr.id;
        tr.remove();
    
        deleteRecord(id);
      }
      async function deleteRecord(id) {
        const url = `http://localhost:3030/jsonstore/grocery/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
      }



    function createElement(type, content, parent, className, id, src){
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
solve();