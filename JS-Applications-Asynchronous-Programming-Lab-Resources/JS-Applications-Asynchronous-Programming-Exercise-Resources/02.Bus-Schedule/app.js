function solve() {
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
    }

    return {
        depart,
        arrive
    };
}

let result = solve();