function attachEvents() {
    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', postMessage);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', getAllMsg);

    function renderMsg(data) {

        const textArea = document.getElementById('messages');
        const content = Object.values(data).map(entry => `${entry.author}: ${entry.content}`).join('\n');
        // const content = [];
        // for (const elem of Object.values(data)) {
        //     content.push(`${elem.author}: ${elem.content}`)
        // }
        // console.log(content.join('\n'));
        textArea.textContent = content;
        console.log(content);
    }

    async function getAllMsg() {
        const url = 'http://localhost:3030/jsonstore/messenger';
        const res = await fetch(url);
        const data = await res.json();

        renderMsg(data);
    }

    async function createPost(body){
        const url = 'http://localhost:3030/jsonstore/messenger';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
    }

    function postMessage() {
        const authorElement = document.querySelector('input[name="author"]');
        const contentElement = document.getElementsByName('content')[0];
        
        let body = {
            author: authorElement.value,
            content: contentElement.value,
        };
        authorElement.value = '';
        contentElement.value = '';
        
        createPost(body)
       
    }
}

attachEvents();