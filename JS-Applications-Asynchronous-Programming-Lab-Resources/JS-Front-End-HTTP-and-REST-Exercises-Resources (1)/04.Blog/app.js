function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', loadPosts)

    let getBtn = document.getElementById('btnViewPost');
    getBtn.addEventListener('click', viewComents);

    let optionElement = document.getElementById('posts');

    let h1 = document.getElementById('post-title');

    let ulElement = document.getElementById('post-comments');

    let posts = [];

    async function loadPosts(e){
        let url = 'http://localhost:3030/jsonstore/blog/posts';

        let resp = await fetch(url);
        let data = await resp.json();
        // console.log(data);

        for (const [key, value] of Object.entries(data)) {
            let newOption = document.createElement('option');
            newOption.value = key;
            newOption.textContent = (value.title);
            optionElement.appendChild(newOption);
            posts.push({title: value.title, body: value.body})
            // console.log(data[key].title);
        }
    }

    async function viewComents(e){
        ulElement.innerHTML = '';
        let url = 'http://localhost:3030/jsonstore/blog/comments';

        let resp = await fetch(url);
        let data = await resp.json();
        // console.log(data);

        let postId = optionElement.value;
        // h1.textContent = document.querySelector(`#posts option[value=${postId}`).textContent;
        h1.textContent =  optionElement.selectedOptions[0].textContent;

        const comments = Object.values(data).filter(el => el.postId === optionElement.value);
        const content = posts.filter(x => x.title === optionElement.selectedOptions[0].textContent);

        document.getElementById('post-body').textContent = content[0].body;
        for (const key in data) {
            if (data[key].postId === postId) {
                let newLi = document.createElement('li');
                newLi.setAttribute('id', `${data[key].id}`)
                newLi.textContent = data[key].text;
                ulElement.appendChild(newLi);

                console.log(data[key].text);
            }
        }
        
        
    }

}

attachEvents();