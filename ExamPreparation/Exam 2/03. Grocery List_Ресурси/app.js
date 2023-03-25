function solve() {
  const url = "http://localhost:3030/jsonstore/grocery/";

  const loadBtn = document.getElementById("load-product");
  loadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData();
  });

  const addBtn = document.getElementById("add-product");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    uploadData();
  });

  const updateProductBtn = document.getElementById('update-product');
  updateProductBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editData();
  });

  const productElement = document.getElementById("product");
  const countElement = document.getElementById("count");
  const priceElement = document.getElementById("price");

  const tbody = document.getElementById("tbody");

  async function fetchData() {
    const promise = await fetch(url);
    const data = await promise.json();
    renderData(data);
  }

  function renderData(data) {
    tbody.innerHTML = "";
    Object.values(data).forEach((elem) => {
      let tr = createElement("tr", "", tbody, elem._id);
      createElement("td", elem.product, tr, "", "name");
      createElement("td", elem.count, tr, "", "count-product");
      createElement("td", elem.price, tr, "", "product-price");
      let tdBtn = createElement("td", "", tr, "", "btn");
      let updateBtn = createElement("button", "Update", tdBtn, "", "update");
      updateBtn.addEventListener('click', updateItem);
      let deleteBtn = createElement("button", "Delete", tdBtn, "", "delete");
      deleteBtn.addEventListener("click", deleteItem);
    });
  }

  function getInputData() {
    let product = productElement.value;
    let count = countElement.value;
    let price = priceElement.value;

    let body = {
      product,
      count,
      price,
    };

    return body;
  }

  async function uploadData() {
    let body = getInputData();
    if (body.product !== "" && body.count !== "" && body.price !== "") {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      productElement.value = "";
      countElement.value = "";
      priceElement.value = "";
      
      fetchData();
    }
  }

  let id = '';

  function updateItem(e){
    let tr = e.currentTarget.parentElement.parentElement;
    id = tr.id;
    let product = tr.querySelectorAll('td')[0].textContent;
    let count = tr.querySelectorAll('td')[1].textContent;
    let price = tr.querySelectorAll('td')[2].textContent;

    productElement.value = product;
    countElement.value = count;
    priceElement.value = price;

    addBtn.disabled = true;
    updateProductBtn.disabled = false;
  }

  async function editData(){
    let body = getInputData();
    const response = await fetch(`${url}${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    const data = await response.json();

    addBtn.disabled = false;
    updateProductBtn.disabled = true;
    productElement.value = "";
    countElement.value = "";
    priceElement.value = "";
    fetchData();
  }
  
  async function deleteItem(e) {
    let tr = e.currentTarget.parentElement.parentElement;
    let id1 = tr.id;
    const response = await fetch(`${url}${id1}`, {
      method: "DELETE",
    });
    fetchData();
  }

  function createElement(type, content, parent, id, className) {
    let newElement = document.createElement(type);

    if (content && type === "input") {
      newElement.value = content;
    } else if (content) {
      newElement.textContent = content;
    }
    if (parent) {
      parent.appendChild(newElement);
    }
    if (className) {
      newElement.className = className;
    }
    if (id) {
      newElement.id = id;
    }
    return newElement;
  }
}
solve();
