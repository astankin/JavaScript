window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn').addEventListener('click', addNewSong);
    const divHitsContainer = document.querySelector('.all-hits-container');

    function addNewSong(e){
        e.preventDefault();

        const genreElement = document.getElementById('genre');
        const nameElement = document.getElementById('name');
        const authorElement = document.getElementById('author');
        const dateElement = document.getElementById('date');

        if (!genreElement.value || !nameElement.value || !authorElement.value || !dateElement.value){
            return;
        }

        let newDiv = createElement('div', '', divHitsContainer, '', 'hits-info');

        createElement('img', '', newDiv, './static/img/img.png');
        createElement('h2', `Genre: ${genreElement.value}`, newDiv);
        createElement('h2', `Name: ${nameElement.value}`, newDiv);
        createElement('h2', `Author: ${authorElement.value}`, newDiv);
        createElement('h3', `Date: ${dateElement.value}`, newDiv);

        let saveBtn = createElement('button', 'Save song', newDiv, '', 'save-btn');
        saveBtn.addEventListener('click', saveSong);

        let likeBtn = createElement('button', 'Like song', newDiv, '', 'like-btn');
        likeBtn.addEventListener('click', likeSong);

        let deleteBtn = createElement('button', 'Delete', newDiv, '', 'delete-btn');
        deleteBtn.addEventListener('click', deleteSong);

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

    }

    function deleteSong(e){
        e.currentTarget.parentElement.remove();
    }

    function saveSong(e){
        let parentDiv = e.currentTarget.parentElement;
        let songSaveBtn  = parentDiv.querySelector('.save-btn');
        songSaveBtn.remove();

        let songLikeBtn  = parentDiv.querySelector('.like-btn');
        songLikeBtn.remove();

        parentDiv.remove();
        let savedDiv = document.querySelector('.saved-container');
        savedDiv.appendChild(parentDiv);
    }

    function likeSong(e){
        let likeElement = document.querySelector('.likes p');
        let likesCount = Number(likeElement.textContent.split(': ')[1]) + 1;
        likeElement.textContent = `Total Likes: ${likesCount}`;
        e.currentTarget.disabled = true;
    }

    function createElement(type, content, parent, src, className){
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