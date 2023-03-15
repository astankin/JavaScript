function solve() {
<<<<<<< HEAD
    const labelElement = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let currStopId = 'depot';
    let currStop = {};

    async function depart() {
        try {
            departBtn.disabled = true;
            let url = `http://localhost:3030/jsonstore/bus/schedule/${currStopId}`;

            const resp = await fetch(url);
            currStop = await resp.json();
            currStopId = currStop.next;

            labelElement.textContent = `Next stop ${currStop.name}`
            arriveBtn.disabled = false;
        } catch (error) {
            labelElement.textContent = 'Error';
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        }


    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        labelElement.textContent = `Arriving at ${currStop.name}`
=======
    const infoElement = document.querySelector('div#info span.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    
    let nextStopId = 'depot';
    let stopName = '';

    async function depart() {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);
            if (!res.ok) {
                let error = new Error();
                error.status = res.status;
                error.statusText = res.statusText;
                throw error;
            }
            const data = await res.json();
            stopName = data.name;
            nextStopId = data.next;
            infoElement.textContent = `Next stop ${stopName}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;

        }
        catch (error) {
            infoElement.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }

    }

    async function arrive() {
        infoElement.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
>>>>>>> 817a6c9d95fd4e5c3abd7382a61d06238e1819eb
    }

    return {
        depart,
        arrive
    };
}

let result = solve();