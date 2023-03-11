window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById("first-name");
  let lastNameElement = document.getElementById("last-name");
  let ageElement = document.getElementById("age");
  let storyTitleElement = document.getElementById("story-title");
  let genreElement = document.getElementById("genre");
  let textElement = document.getElementById("story");
  let publishBtnElement = document.getElementById("form-btn");
  let prevueElement = document.getElementById("preview-list");

  publishBtnElement.addEventListener("click", printInfo);

  function printInfo(e) {
    if (
      firstNameElement.value &&
      lastNameElement.value &&
      ageElement.value &&
      storyTitleElement.value &&
      textElement.value
    ) {

      let editFirstName = firstNameElement.value;
      let editLastName = lastNameElement.value;
      let editAge = ageElement.value;
      let editTitle = storyTitleElement.value;
      let editStory = textElement.value;

      let li = document.createElement("li");
      // li.className = "story-info";
      li.setAttribute('class', 'story-info');
      let article = document.createElement("article");

      let h4 = document.createElement("h4");
      h4.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;
      article.appendChild(h4);

      let p1 = document.createElement("p");
      p1.textContent = `Age: ${ageElement.value}`;
      article.appendChild(p1);

      let p2 = document.createElement("p");
      p2.textContent = `Title: ${storyTitleElement.value}`;
      article.appendChild(p2);

      let p3 = document.createElement("p");
      p3.textContent = `Genre: ${genreElement.value}`;
      article.appendChild(p3);

      let p4 = document.createElement("p");
      p4.textContent = textElement.value;
      article.appendChild(p4);

      li.appendChild(article);
      prevueElement.appendChild(li);

      let btnSave = document.createElement("button");
      btnSave.className = "save-btn";
      btnSave.textContent = "Save Story";
      li.appendChild(btnSave);
      btnSave.addEventListener('click', onSave)

      let btnEdit = document.createElement("button");
      btnEdit.className = "edit-btn";
      btnEdit.textContent = "Edit Story";
      li.appendChild(btnEdit);
      btnEdit.addEventListener("click", onEdit);

      let btnDel = document.createElement("button");
      btnDel.className = "delete-btn";
      btnDel.textContent = "Delete Story";
      li.appendChild(btnDel);
      btnDel.addEventListener('click', onDelete)

      firstNameElement.value = "";
      lastNameElement.value = "";
      ageElement.value = "";
      storyTitleElement.value = "";
      textElement.value = "";

      publishBtnElement.disabled = true;

      function onEdit(e){
        firstNameElement.value = editFirstName;
        lastNameElement.value = editLastName;
        ageElement.value = editAge;
        storyTitleElement.value = editTitle;
        textElement.value = editStory;
    
        li.remove();
    
        publishBtnElement.disabled = false;
    
      }

      function onSave(e){
        let mainElement = document.getElementById('main');
        let mainChildElements = mainElement.querySelectorAll('div');
        for (const elem of mainChildElements) {
          elem.remove();
        }
        let h1Saved = document.createElement("h1");
        h1Saved.textContent = "Your scary story is saved!";
        mainElement.appendChild(h1Saved);
      }

      function onDelete(e){
        li.remove();
        publishBtnElement.disabled = false;
      }

    }
  }
}
