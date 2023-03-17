function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords);
    document.getElementById('btnCreate').addEventListener('click', createNewRecord);

    async function onLoadAllRecords(){
        const url = 'http://localhost:3030/jsonstore/phonebook';
        const response = await fetch(url);
        const data = await response.json();

        renderRecords(data);
    }
    
    function renderRecords(data){

        const ulElement = document.getElementById('phonebook');
        ulElement.innerHTML = '';
        // const content = Object.values(data).map(elem => `${elem.person}: ${elem.phone}`);
        Object.values(data).forEach(elem => {
            let newLi = document.createElement('li');
            newLi.textContent = `${elem.person}: ${elem.phone}`;
            newLi.setAttribute('id', elem._id)
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', handleDelete);

            newLi.appendChild(deleteBtn);
            ulElement.appendChild(newLi);
        });

    }

    function createNewRecord() {
        const personElement = document.getElementById('person');
        const phoneElement = document.getElementById('phone');

        let body = {
            "person": personElement.value,
            "phone": phoneElement.value
          }
          personElement.value = '';
          phoneElement.value = '';

          postNewRecord(body);
    }

    async function postNewRecord(body) {
        const url = 'http://localhost:3030/jsonstore/phonebook';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();

        onLoadAllRecords();
    }

    function handleDelete(e){
        let li = e.currentTarget.parentElement;
        let id = li.id;
        li.remove();                         // removing from the visualized screen
        deleteRecord(id);                    //  delete from the records                           
    }

    async function deleteRecord(id){
        const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(null)
        });
    }
}

attachEvents();