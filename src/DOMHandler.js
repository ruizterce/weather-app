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
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');

    const dateElement = document.createElement('h2');
    dateElement.classList.add('date');
    dateElement.textContent = dayObject.date;
    dayElement.appendChild(dateElement);

    const hoursElement = document.createElement('div');
    hoursElement.classList.add('hours');

    dayObject.hour.forEach((hourObject) => {
      const hourElement = document.createElement('div');
      hourElement.classList.add('hour');

      const timeElement = document.createElement('h3');
      timeElement.textContent = hourObject.time;
      hourElement.appendChild(timeElement);

      const tempElement = document.createElement('p');
      tempElement.classList.add('temp');
      tempElement.textContent = 'Temperature: ' + hourObject.temp_c + '°C';
      hourElement.appendChild(tempElement);

      const humidityElement = document.createElement('p');
      humidityElement.classList.add('humidity');
      humidityElement.textContent = 'Humidity: ' + hourObject.humidity + '%';
      hourElement.appendChild(humidityElement);

      const conditionTypeElement = document.createElement('p');
      conditionTypeElement.classList.add('condition-type');
      conditionTypeElement.textContent = 'Condition: ' + hourObject.condition.text;
      hourElement.appendChild(conditionTypeElement);

      const windElement = document.createElement('p');
      windElement.classList.add('wind');
      windElement.textContent =
        'Wind: ' + hourObject.wind_kph + ' k/h. Direction: ' + hourObject.wind_dir;
      hourElement.appendChild(windElement);

      const rainChanceElement = document.createElement('p');
      rainChanceElement.classList.add('rain-chance');
      rainChanceElement.textContent = 'Rain Chance: ' + hourObject.chance_of_rain;
      hourElement.appendChild(rainChanceElement);

      hoursElement.appendChild(hourElement);
    });

    dayElement.appendChild(hoursElement);

    forecastElement.appendChild(dayElement);
  });
  containerElement.appendChild(forecastElement);
}
