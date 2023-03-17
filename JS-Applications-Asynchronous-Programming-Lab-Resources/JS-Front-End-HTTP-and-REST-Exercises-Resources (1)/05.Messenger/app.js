function attachEvents() {
    document.getElementById('submit').addEventListener('click', createPost); // select buttons and add event listeners
    document.getElementById('refresh').addEventListener('click', getAllMsg);

    async function getAllMsg(){
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();                                            // get data from the url

        renderMsg(data);
    }

    function renderMsg(data){
        const textArea = document.getElementById('messages');
        const content = Object.values(data).map(entry => `${entry.author}: ${entry.content}`);  // take the vlues as array and create new array with key -values 
        textArea.textContent = content.join('\n');
    }
    
    function createPost(){
        let authorElement = document.querySelector('input[name="author"]');
        let contentElement = document.querySelector('input[name="content"]');
        
        let body = {
            author: authorElement.value,
            content: contentElement.value,
          }
        authorElement.value = '';
        contentElement.value = '';
        postMessage(body);
    }

    async function postMessage(body){

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



}

attachEvents();