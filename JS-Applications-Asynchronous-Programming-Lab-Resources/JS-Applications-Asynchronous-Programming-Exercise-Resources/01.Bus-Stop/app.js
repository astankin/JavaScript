async function getInfo() {
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
<<<<<<< Updated upstream
;
    stopNameElement.textContent = data.name;
    debugger
}
=======

    stopNameElement.textContent = data.name;

    Object.entries(data.buses).forEach(([busNumber, timeArrive]) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes`;

      busList.appendChild(li);
    });
  } catch (error) {
    stopNameElement.textContent = "Error";
  }
}
>>>>>>> Stashed changes
