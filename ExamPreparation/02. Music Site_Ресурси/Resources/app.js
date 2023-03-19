window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn').addEventListener('click', onClickAdd);
    const divHitsContainer = document.querySelector('.all-hits-container');

    function onClickAdd(e){
        e.preventDefault();

        const genreElement = document.getElementById('genre');
        const nameElement = document.getElementById('name');
        const authorElement = document.getElementById('author');
        const dateElement = document.getElementById('date');

        let newDiv = createElement('div', '', '', '', 'hits-info');

        createElement('img', '', newDiv, './static/img/img.png');
        createElement('h2', `Genre: ${genreElement.value}`, newDiv);
        createElement('h2', `Name: ${nameElement.value}`, newDiv);
        createElement('h2', `Name: ${authorElement.value}`, newDiv);
        createElement('h2', `Date: ${dateElement.value}`, newDiv);

        let saveBtn = createElement('button', 'Save song', newDiv, '', 'save-btn');

        let likeBtn = createElement('button', 'Like song', newDiv, '', 'like-btn');
        likeBtn.addEventListener('click', like);
        let deleteBtn = createElement('button', 'Delete', newDiv, '', 'delete-btn');

        divHitsContainer.appendChild(newDiv);

    }

    function like(e){
        let likeElement = document.querySelector('.likes p');
        console.log(likeElement.textContent);
        let likes = Number(likeElement.textContent.split(': ')[1]) + 1;
        likeElement.textContent = `Total Likes: ${likes}`;
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