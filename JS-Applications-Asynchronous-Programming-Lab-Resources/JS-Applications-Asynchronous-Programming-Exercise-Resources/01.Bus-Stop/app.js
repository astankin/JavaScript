async function getInfo() {
    const stopInfoElement = document.getElementById('stopId');
    const stopId = stopInfoElement.value;

    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${stopId}`;

    const response = await fetch(url);
    const data = await response.json();
    debugger
}