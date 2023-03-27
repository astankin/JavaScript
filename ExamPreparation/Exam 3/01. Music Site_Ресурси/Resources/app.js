window.addEventListener('load', solve);

function solve() {
   const addBtn = document.getElementById('add-btn');
   addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getInputData();
   });

   const genreElement = document.getElementById('genre');
   const nameElement = document.getElementById('name');
   const authorElement = document.getElementById('author');
   const dateElement = document.getElementById('date');

   const allHitsContainer = document.querySelector('.all-hits-container');
   const savedHitsContainer = document.querySelector('.saved-container');


   function getInputData(){
    let genre = genreElement.value;
    let name = nameElement.value;
    let author = authorElement.value;
    let date = dateElement.value;

    if (!genre || !name || !author || ! date){
        return
    }
    let divInfo = createElement('div', '', allHitsContainer, 'hits-info');
    createElement('img', '', divInfo, '', './static/img/img.png');
    createElement('h2', `Genre: ${genre}`, divInfo);
    createElement('h2', `Name: ${name}`, divInfo);
    createElement('h2', `Author: ${author}`, divInfo);
    createElement('h3', `Date: ${date}`, divInfo);
    let saveBtn = createElement('button', 'Save song', divInfo, 'save-btn');
    saveBtn.addEventListener('click', saveSongHandler)

    let likeBtn = createElement('button', 'Like song', divInfo, 'like-btn');
    likeBtn.addEventListener('click', likeSongHandler)

    let deleteBtn = createElement('button', 'Delete', divInfo, 'delete-btn');
    deleteBtn.addEventListener('click', deleteSongHandler)


    genreElement.value = '';
    nameElement.value = '';
    authorElement.value = '';
    dateElement.value = '';
   }

   function deleteSongHandler(e){
    let parentDiv = e.currentTarget.parentElement;
    parentDiv.remove();
   }

   function saveSongHandler(e){
        let parentDiv = e.currentTarget.parentElement;
        let saveBtn = parentDiv.querySelectorAll('button')[0];
        let likeBtn = parentDiv.querySelectorAll('button')[1];
        likeBtn.remove();
        saveBtn.remove();
        parentDiv.remove();
        savedHitsContainer.appendChild(parentDiv);
   }

   function likeSongHandler(e){
    const likesCount = Number(document.querySelector('.likes > p').textContent.split(': ')[1]) + 1;
    document.querySelector('.likes > p').textContent = `Total Likes: ${likesCount}`
    e.currentTarget.disabled = true;
   }

   function createElement(type, content, parent, className, src){
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
    return newElement;
}
}