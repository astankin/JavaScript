function solve() {
  const label = document.querySelector("#info span");
  const departBtn = document.getElementById("depart");
  const arrivedBtn = document.getElementById("arrive");

  let currentStopId = "depot";
  let currentStop = {};

  async function depart() {
    try {
      departBtn.disabled = true;
      const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`;

      const response = await fetch(url);
      let nextStop = await response.json();

      currentStopId = nextStop.next;
      currentStop = nextStop;

      label.textContent = `Next stop ${nextStop.name}`;

      arrivedBtn.disabled = false;
    } catch (error) {
      label.textContent = 'Error';
      departBtn.disabled = true;
      arrivedBtn.disabled = true;
    }
  }

  async function arrive() {
    departBtn.disabled = false;
    arrivedBtn.disabled = true;

    label.textContent = `Arriving at ${currentStop.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();

// function solve() {
//     const infoElement = document.querySelector('div#info span.info');
//     const departBtn = document.getElementById('depart');
//     const arriveBtn = document.getElementById('arrive');

//     let nextStopId = 'depot';
//     let stopName = '';

//     async function depart() {
//         try {
//             const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);
//             if (!res.ok) {
//                 let error = new Error();
//                 error.status = res.status;
//                 error.statusText = res.statusText;
//                 throw error;
//             }
//             const data = await res.json();
//             stopName = data.name;
//             nextStopId = data.next;
//             infoElement.textContent = `Next stop ${stopName}`;
//             departBtn.disabled = true;
//             arriveBtn.disabled = false;

//         }
//         catch (error) {
//             infoElement.textContent = 'Error';
//             departBtn.disabled = true;
//             arriveBtn.disabled = true;
//         }

//     }

//     async function arrive() {
//         infoElement.textContent = `Arriving at ${stopName}`;
//         departBtn.disabled = false;
//         arriveBtn.disabled = true;
//     }

//     return {
//         depart,
//         arrive
//     };
// }

// let result = solve();
