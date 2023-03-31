function attachEvents() {
  const url = "http://localhost:3030/jsonstore/tasks/";
  const inputElement = document.getElementById("title");
  const addBtn = document.getElementById("add-button");
  addBtn.addEventListener("click", addNewItem);

  const titleElement = document.getElementById("title");

  const ul = document.getElementById("todo-list");

  document.getElementById("load-button").addEventListener("click", (e) => {
    e.preventDefault();
    getData();
  });

  async function getData(e) {
    if (e) {
      e.preventDefault();
    }
    ul.innerHTML = "";

    const url = "http://localhost:3030/jsonstore/tasks/";
    const response = await fetch(url);
    const data = await response.json();
    renderData(data);
  }

  function renderData(data) {
    ul.innerHTML = "";
    Object.values(data).forEach((elem) => {
      let li = createElement("li", "", ul, elem._id);
      createElement("span", elem.name, li);

      let removeBtn = createElement("button", "Remove", li);
      removeBtn.addEventListener("click", removeItem);

      let editBtn = createElement("button", "Edit", li);
      editBtn.addEventListener("click", editItem);
    });
  }

  async function addNewItem(e) {
    e.preventDefault();
    let title = titleElement.value;
    let body = {
      name: title,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    titleElement.value = '';
    getData();
  }

  function editItem(e) {
    let parentLi = e.currentTarget.parentElement;
    let id = parentLi.id;
    let value = parentLi.querySelector("span").textContent;
    parentLi.innerHTML = "";

    let input = createElement("input", "", parentLi);
    input.value = value;

    let removeBtn = createElement("button", "Remove", parentLi);
    removeBtn.addEventListener("click", removeItem);

    let submitBtn = createElement("button", "Submit", parentLi);
    submitBtn.addEventListener("click", uploadEditedItem);
  }

  async function uploadEditedItem(e) {
    const parent = e.target.parentElement;
    const inputVal = parent.querySelector("input").value;
    const id = parent.id;
    let body = {
      name: inputVal,
    };
    const response = await fetch(`${url}${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    getData();
  }

  async function removeItem(e) {
    let parentLi = e.currentTarget.parentElement;
    let id = parentLi.id;
    const response = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
    getData();
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
attachEvents();
