import processWeatherData from './processWeatherData';

//Initialize the app, generating location input element and search button, and call displayWeatherData with a placeholder location.
export default function initWeatherApp(containerElement) {
  const locationElement = document.createElement('input');
  locationElement.className = 'location';
  locationElement.value = 'Terrassa';
  containerElement.appendChild(locationElement);
  displayWeatherData(containerElement, locationElement.value);

  const updateLocationBtn = document.createElement('button');
  updateLocationBtn.className = 'button';
  updateLocationBtn.textContent = 'Search';
  containerElement.appendChild(updateLocationBtn);

  updateLocationBtn.addEventListener('click', () => {
    displayWeatherData(containerElement, locationElement.value);
  });
}

//Add DOM elements inside a given containerElement, from the weatherObject returned by processWeatherData for a given location
async function displayWeatherData(containerElement, location) {
  if (document.querySelector('.forecast')) {
    document.querySelector('.forecast').remove();
  }
  const forecastElement = document.createElement('div');
  forecastElement.className = 'forecast';
  const weatherObject = await processWeatherData(location);
  console.log('weatherObject');
  console.log(weatherObject);

  weatherObject.forecast.forecastday.forEach((dayObject) => {
    //Create day element and header
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    const dateElement = document.createElement('h2');
    dateElement.classList.add('date');
    dateElement.textContent = dayObject.date;
    dayElement.appendChild(dateElement);

    const table = document.createElement('table');
    table.classList.add('weather-table');

    //Create table headers
    const headerRow = document.createElement('tr');
    const headers = ['Hour', 'Temperature', 'Humidity', 'Condition', 'Wind', 'Rain Chance'];

    headers.forEach((headerText) => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });

    table.appendChild(headerRow);

    //Create table rows
    dayObject.hour.forEach((hourObject) => {
      const hourRow = document.createElement('tr');

      //Hour
      const hourCell = document.createElement('td');
      const time = new Date(hourObject.time);
      hourCell.textContent = time.getHours() + ':00';
      hourRow.appendChild(hourCell);

      //Temp
      const tempCell = document.createElement('td');
      tempCell.classList.add('temp');
      tempCell.textContent = hourObject.temp_c + '°C';
      hourRow.appendChild(tempCell);

      //Humidity
      const humidityCell = document.createElement('td');
      humidityCell.classList.add('humidity');
      humidityCell.textContent = hourObject.humidity + '%';
      hourRow.appendChild(humidityCell);

      //Condition
      const conditionCell = document.createElement('td');
      conditionCell.classList.add('condition');
      conditionCell.textContent = hourObject.condition.text;
      hourRow.appendChild(conditionCell);

      //Wind
      const windCell = document.createElement('td');
      windCell.classList.add('wind');
      windCell.textContent = hourObject.wind_kph + ' k/h ' + hourObject.wind_dir;
      hourRow.appendChild(windCell);

      //Rain Chance
      const rainChanceCell = document.createElement('td');
      rainChanceCell.classList.add('rain-chance');
      rainChanceCell.textContent = hourObject.chance_of_rain + '%';
      hourRow.appendChild(rainChanceCell);

      table.appendChild(hourRow);
    });

    dayElement.appendChild(table);
    forecastElement.appendChild(dayElement);
  });

  containerElement.appendChild(forecastElement);
}
