async function getInfo() {
<<<<<<< HEAD
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
=======
<<<<<<< Updated upstream
    const stopInfoElement = document.getElementById('stopId');
    const stopId = stopInfoElement.value;
    const stopNameElement = document.getElementById('stopName');
=======
    
  const stopInfoElement = document.getElementById("stopId");
  const stopNameElement = document.getElementById("stopName");
  const busList = document.getElementById("buses");
  const stopId = stopInfoElement.value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
>>>>>>> Stashed changes

  busList.innerHTML = "";
  stopInfoElement.value = "";

  try {
    const response = await fetch(url);
    const data = await response.json();
;

    stopNameElement.textContent = data.name;
    debugger
}
>>>>>>> 817a6c9d95fd4e5c3abd7382a61d06238e1819eb
