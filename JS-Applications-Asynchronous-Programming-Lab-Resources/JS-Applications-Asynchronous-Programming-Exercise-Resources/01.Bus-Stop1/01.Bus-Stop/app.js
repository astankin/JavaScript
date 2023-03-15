<<<<<<< Updated upstream
// async function getInfo() {
//     let stopNameElement = document.getElementById('stopName');
//     let ctimeTableElement = document.getElementById('buses');
//     let stopId = document.getElementById('stopId').value;
//     const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`


//     try {
//         stopNameElement.textContent = 'Loading...';
//         ctimeTableElement.innerHTML = '';
//         const res = await fetch(url);
        
//         if (res.status !== 200) {
//             throw new Error ('Stop ID not found!')
//         }
//         const data = await res.json();
//         console.log(Object.entries(data));
//         stopNameElement.textContent = data.name;

//         Object.entries(data.buses).forEach(b => {
//             let liElement = document.createElement('li');
//             liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

//             ctimeTableElement.appendChild(liElement);
//         })

//     } catch (error) {
//         stopNameElement.textContent = 'Error';
//     }
// }

function getInfo() {
    let submitBtn = document.getElementById('submit');
    let busList = document.getElementById('buses');
    let stop = document.getElementById('stopName');
 
    submitBtn.addEventListener('click', () => {
        let idVal = document.getElementById('stopId').value;
        let url = `http://localhost:3030/jsonstore/bus/businfo/${idVal}`;
 
 
        fetch(url)
            .then(data => data.json())
            .catch(err => {stop.textContent = 'Error'})
            .then(data => {
                stop.textContent = '';
                busList.innerHTML = '';
                stop.textContent = data.name;
                for (entry in data.buses) {
                    let listEl= document.createElement('li');
                    listEl.textContent = `Bus ${entry} arrives in ${data.buses[entry]} minutes`
                    busList.appendChild(listEl);
                }
 
            })
            // Not sure if this catch is needed, but want to make sure that we don't have invalid entry in bus.json
            .catch(err => {stop.textContent = 'Error'})
 
 
    })
}
=======
async function getInfo() {
    let stopNameElement = document.getElementById('stopName');
    let ctimeTableElement = document.getElementById('buses');
    let stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`


    try {
        stopNameElement.textContent = 'Loading...';
        ctimeTableElement.innerHTML = '';
        const res = await fetch(url);
        
        if (res.status !== 200) {
            throw new Error ('Stop ID not found!')
        }
        const data = await res.json();
        console.log(Object.entries(data));
        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            ctimeTableElement.appendChild(liElement);
        })

    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}

// function getInfo() {
//     let submitBtn = document.getElementById('submit');
//     let busList = document.getElementById('buses');
//     let stop = document.getElementById('stopName');
 
//     submitBtn.addEventListener('click', () => {
//         let idVal = document.getElementById('stopId').value;
//         let url = `http://localhost:3030/jsonstore/bus/businfo/${idVal}`;
 
 
//         fetch(url)
//             .then(data => data.json())
//             .catch(err => {stop.textContent = 'Error'})
//             .then(data => {
//                 stop.textContent = '';
//                 busList.innerHTML = '';
//                 stop.textContent = data.name;
//                 for (entry in data.buses) {
//                     let listEl= document.createElement('li');
//                     listEl.textContent = `Bus ${entry} arrives in ${data.buses[entry]} minutes`
//                     busList.appendChild(listEl);
//                 }
 
//             })
//             // Not sure if this catch is needed, but want to make sure that we don't have invalid entry in bus.json
//             .catch(err => {stop.textContent = 'Error'})
 
 
//     })
// }
>>>>>>> Stashed changes
