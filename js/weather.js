const API = "14a8172ae2a4887e871f9d897faea290";

function here(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#temp");
    const city = document.querySelector("#location");
    weather.innerText = `${data.weather[0].main}, ${data.main.temp}`;
    city.innerText = data.name;
  });
}

function nope(){
  alert("Where are you...?");
}

navigator.geolocation.getCurrentPosition(here,nope);