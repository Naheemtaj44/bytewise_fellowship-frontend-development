function getWeather() {
    const apiKey ='YOUR-API-KEY';
    const = city document.getElementById ('city').value;
if(!city){
    alert('please enter acity');
    return;
} 
const currentWeatherUrl = 'https://api.openweathermap.org/ data/2.5/weather?q=${city}&appid=${apiKey}`;

const forecastUrl = 'https://api.openweathermap.org/data/ 2.5/forecast?q=${city}&appid=${apiKey}`;

function getWeather() {

    fetch(forecastUrl)
    
    .then(response => response.json())
    
    .then(data => {
    
    A displayHourlyForecast(data.list);
    
    })
    
    .catch(error => {
    
    console.error('Error fetching hourly forecast
    
    data:', error);
    
    alert('Error fetching hourly forecast data. Please
    
    try again.');
    
    });
    
    }
    function displayWeather(data) {

        WEATHER APP
        
        const tempDivInfo = document.getElementById('temp-div');
        
        const weatherInfoDiv = document.getElementById('weather-info'); const weatherIcon = document.getElementById('weather-icon');
        
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
        
        Weather App
        
        }
        / Clear previous content weatherInfoDiv.innerHTML = ''; hourlyForecastDiv.innerHTML = ''; tempDivInfo.innerHTML = '';

}
function displayWeather(data) {

    if (data.cod === '404') {
    
    weatherInfoDiv.innerHTML = '<p>${data.message></p>';
    
    } else {
    
    const cityName = data.name;
    
    const temperature = Math.round(data.main.temp - 273.15);
    
    const description = data.weather[0].description;
    
    const iconCode data.weather[0].icon;
    
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode)@4x.png';
    
    ?
    
    }
    const temperatureHTML = <p>${temperature}°C</p>

`;

const weatherHtml =` <p>${cityName}</p> <p>${description}</p>

`;

tempDivInfo.innerHTML = temperatureHTML; weatherInfoDiv.innerHTML = weatherHtml;

weatherIcon.src = iconUrl;

weatherIcon.alt = description;

showImage();

}
function displayHourlyForecast(hourlyData) {

const hourlyForecastDiv = document.getElementById('hourly-forecast'); const next24Hours = hourlyData.slice(0, 8);

next24Hours.forEach(item => {

});

}