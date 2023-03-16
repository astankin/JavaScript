function attachEvents() {
    const submutBtnElement = document.getElementById('submit');
    submutBtnElement.addEventListener('click', onClick);
    let locationNameElement = document.querySelector('#location');
    let divElement = document.getElementById('forecast');

    let code = "";
    async function onClick() {

        let symbols = {
            'Sunny': '☀',
            'Partly sunny': '⛅',
            'Overcast': '☁',
            'Rain': '☂'
        }

       try {
        
        let locationName = locationNameElement.value;

        let url = `http://localhost:3030/jsonstore/forecaster/locations/`;
        let resp = await fetch(url);
        let data = await resp.json();
        code = (Array.from(data).find(x => x.name === locationName)).code;

        let url1 = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        let resp1 = await fetch(url1);
        let data1 = await resp1.json();
        // console.log(data1);
        let condition = data1.forecast.condition;

        let parrentDiv = document.getElementById('current');
        let divForecast = document.createElement('div');
        divForecast.setAttribute('class', 'forecast');

        let spanSymbol = document.createElement('span');
        spanSymbol.setAttribute('class', 'condition symbol');

        let spanCond = document.createElement('span');
        spanCond.setAttribute('class', 'condition')
        let span1 = document.createElement('span');
        span1.setAttribute('class', 'forecast-data');
        spanCond.appendChild(span1);
        let span2 = document.createElement('span');
        span2.setAttribute('class', 'forecast-data');
        spanCond.appendChild(span2);
        let span3 = document.createElement('span');
        span3.setAttribute('class', 'forecast-data');
        spanCond.appendChild(span3);

        divForecast.appendChild(spanSymbol);
        divForecast.appendChild(spanCond);

        spanSymbol.textContent = symbols[condition];

        span1.textContent = data1.name;
        span2.textContent = `${data1.forecast.low}°/${data1.forecast.high}°`;
        span3.textContent = condition;

        divElement.style.display = "block";
        parrentDiv.appendChild(divForecast);


        let url2 = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        let resp2 = await fetch(url2);
        let data2 = await resp2.json();
        // console.log(data2);

        ///////////////////////////////////////////////////////////////////

        let info = data2.forecast;
        console.log(info);

        let upcomingDiv = document.getElementById('upcoming');

        let forcastInfoDiv = document.createElement('div');
        forcastInfoDiv.setAttribute('class', 'forecast-info');

        for (let i = 0; i < info.length; i++) {
            let spanUpcoming = document.createElement('span');
            spanUpcoming.setAttribute('class', 'upcoming');

            let spanSymbol2 = document.createElement('span');
            spanSymbol2.setAttribute('class', 'symbol');
            spanSymbol2.textContent = symbols[info[i].condition];
            spanUpcoming.appendChild(spanSymbol2);

            let spanForecastData1 = document.createElement('span');
            spanForecastData1.setAttribute('class', 'forecast-data');
            spanForecastData1.textContent = `${info[i].low}°/${info[i].high}°`;
            spanUpcoming.appendChild(spanForecastData1);
            
            let spanForecastData2 = document.createElement('span');
            spanForecastData2.setAttribute('class', 'forecast-data');
            spanForecastData2.textContent = info[i].condition;
            spanUpcoming.appendChild(spanForecastData2);

            forcastInfoDiv.appendChild(spanUpcoming);
            upcomingDiv.appendChild(forcastInfoDiv);
        }
       } catch (error) {
            divElement.innerHTML = '';
            divElement.textContent = 'Error';
            divElement.style.display = 'block';
       }

    }

}

attachEvents();