async function getInfo() {
    const busStopIdElement = document.getElementById('stopId');
    let busId = busStopIdElement.value;
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
    busStopIdElement.value = '';
    busesElement.innerHTML = '';

    try {
        
        const resp = await fetch(url);
        const data = await resp.json();

        stopNameElement.textContent = data.name;
        
        Object.entries(data.buses).forEach(([busNumber, arrTime]) => {
            let li = document.createElement('li');
            li.textContent = `Bus ${busNumber} arrives in ${arrTime} minutes`;
            busesElement.appendChild(li);
        })

    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}