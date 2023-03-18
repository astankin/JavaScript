function attachEvents() {
  getRecords();

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", getInput);

  function getInput(e) {
    e.preventDefault();

    const firstNameElement = document.querySelector('input[name="firstName"]');
    const lastNameElement = document.querySelector('input[name="lastName"]');
    const facultyNumberElement = document.querySelector('input[name="facultyNumber"]');
    const gradeElement = document.querySelector('input[name="grade"]');

    if (firstNameElement.value && lastNameElement.value && facultyNumberElement.value && gradeElement.value) {
      let body = {
        firstName: firstNameElement.value,
        lastName: lastNameElement.value,
        facultyNumber: facultyNumberElement.value,
        grade: gradeElement.value,
      };
      renderNewDate(firstNameElement, lastNameElement, facultyNumberElement, gradeElement);
      addRecord(body);
    }
  }

  function renderNewDate(firstNameElement, lastNameElement, facultyNumberElement, gradeElement){
    const tableBody = document.querySelector("#results tbody");
      const tr = document.createElement("tr");

      const firstNameCell = tr.insertCell(0);
      firstNameCell.innerText = firstNameElement.value;

      const lastNameCell = tr.insertCell(1);
      lastNameCell.innerText = lastNameElement.value;

      const facNumberCell = tr.insertCell(2);
      facNumberCell.innerText = facultyNumberElement.value;

      const gradeCell = tr.insertCell(3);
      gradeCell.innerText = gradeElement.value;

      tableBody.appendChild(tr);

      firstNameElement.value = '';
      lastNameElement.value = '';
      facultyNumberElement.value = '';
      gradeElement.value = '';
  }

  async function addRecord(body) {
    const url = "http://localhost:3030/jsonstore/collections/students";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async function getRecords() {
    const url = "http://localhost:3030/jsonstore/collections/students";
    const response = await fetch(url);
    const data = await response.json();

    renderRecords(data);
  }

  function renderRecords(data) {
    Object.values(data).forEach((student) => {
      const firstName = student.firstName;
      const lastName = student.lastName;
      const facultyNumber = student.facultyNumber;
      const grade = Number(student.grade);

      const tableBody = document.querySelector("#results tbody");
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");

      td1.textContent = firstName;
      tr.appendChild(td1);

      td2.textContent = lastName;
      tr.appendChild(td2);

      td3.textContent = facultyNumber;
      tr.appendChild(td3);

      td4.textContent = grade;
      tr.appendChild(td4);

      // const firstNameCell = tr.insertCell(0);
      // firstNameCell.innerText = firstName;

      // const lastNameCell = tr.insertCell(1);
      // lastNameCell.innerText = lastName;

      // const facNumberCell = tr.insertCell(2);
      // facNumberCell.innerText = facultyNumber;

      // const gradeCell = tr.insertCell(3);
      // gradeCell.innerText = grade;

      tableBody.appendChild(tr);
    });
  }
}

attachEvents();
