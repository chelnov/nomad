// https://api.openweathermap.org/data/2.5/weather?lat=37.650432&lon=126.7924992&appid=61215e8c3614ad0dcae7120ff2e815d2

const API_KEY = "61215e8c3614ad0dcae7120ff2e815d2";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;    
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");            
            const name = data.name;
//            const weather = data.weather[0].main;
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            //console.log( data.main, data.weather[0].main);
    });
}

function onGeoError() {
    alert("Con't find you. No Weather for you.");
}

window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
});