function solve() {
  let buttonElements = document.querySelectorAll("button");
  let genBtn = buttonElements[0];
  let buyBtn = buttonElements[1];
  genBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  function generate(e) {
    let input = JSON.parse(document.querySelector("textarea").value);

    for (const el of input) {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = el.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.textContent = el.name;
      td2.appendChild(p2);
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.textContent = Number(el.price);
      td3.appendChild(p3);
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      let p4 = document.createElement("p");
      p4.textContent = Number(el.decFactor);
      td4.appendChild(p4);
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      let check = document.createElement("input");
      check.type = "checkbox";
      td5.appendChild(check);
      tr.appendChild(td5);

      document.querySelector("tbody").appendChild(tr);
    }
  }

  function buy(e) {
    let checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(c => c.checked);
    let boughtItems = [];
    let totalPrice = 0;
    let decFactor = 0;

    checkBoxes.forEach((x) => {
      let parent = x.parentElement.parentElement;
      let info = parent.querySelectorAll("p");
      boughtItems.push(info[0].textContent);
      totalPrice += Number(info[1].textContent);
      decFactor += Number(info[2].textContent);
    })
    let output = document.querySelectorAll("textarea")[1];
    output.textContent += `Bought furniture: ${boughtItems.join(", ")}\n`;
    output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${decFactor / checkBoxes.length}`;
  }
}
