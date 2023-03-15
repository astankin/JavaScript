function attachEvents() {
    const submutBtnElement = document.getElementById('submit');
    submutBtnElement.addEventListener('click', onClick);
    let locationNameElement = document.querySelector('#location');
    let 
   
    let code = "";
    async function onClick(){
        let locationName = locationNameElement.value;
        
        let url = `http://localhost:3030/jsonstore/forecaster/locations/`;
        let resp = await fetch(url);
        let data = await resp.json();
        code = (Array.from(data).find(x => x.name === locationName)).code;
        console.log(code);

      
        let url1 = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        let resp1 = await fetch(url1);
        let data1 = await resp1.json();
        console.log(data1);

        let url2 = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        let resp2 = await fetch(url2);
        let data2 = await resp2.json();
        console.log(data2);
    }
   
}

attachEvents();