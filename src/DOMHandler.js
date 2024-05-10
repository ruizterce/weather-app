import processWeatherData from './processWeatherData';

//Initialize the app, generating location input element and search button, and call displayWeatherData with a placeholder location.
export default function initWeatherApp(containerElement) {
  const locationElement = document.createElement('input');
  locationElement.className = 'location';
  //Randomize starting location between the ones in the array
  const startingLocation = [
    'Tokyo',
    'New York',
    'Madrid',
    'Shanghai',
    'Moscow',
    'Toronto',
    'Melbourne',
    'Berlin',
    'Seoul',
    'Brussels',
    'Sydney',
    'Washington',
    'Beijing',
    'Chicago',
    'Los Angeles',
    'Singapore',
    'Hong Kong',
    'Paris',
    'London'
  ];
  locationElement.value = startingLocation[Math.floor(Math.random() * startingLocation.length)];
  containerElement.appendChild(locationElement);
  displayWeatherData(containerElement, locationElement.value);
  locationElement.style.width = eval(locationElement.value.length + 1) + 'ch';

  const authorElement = document.createElement('a');
  authorElement.classList.add('author');
  authorElement.textContent = '@ruizterce';
  authorElement.href = 'https://github.com/ruizterce';
  containerElement.appendChild(authorElement);

  //Widen locationElement and select text
  locationElement.addEventListener('focus', () => {
    locationElement.style.width = '70vh';
    locationElement.select();
  });
  //Refresh forecast info to the new location
  locationElement.addEventListener('blur', () => {
    displayWeatherData(containerElement, locationElement.value);
    //Adjust locationElement width to value text length
    locationElement.style.width = eval(locationElement.value.length + 1) + 'ch';
  });
  //Blur locationElement by pressing Enter
  locationElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      locationElement.blur();
    }
  });
}

//Add DOM elements inside a given containerElement, from the weatherObject returned by processWeatherData for a given location
async function displayWeatherData(containerElement, location) {
  try {
    //Remove prevous .forecast and .error
    if (document.querySelector('.forecast')) {
      document.querySelector('.forecast').remove();
    }
    if (document.querySelector('.error')) {
      document.querySelector('.error').remove();
    }

    //Create forecast container element
    const forecastElement = document.createElement('div');
    forecastElement.className = 'forecast';
    const weatherObject = await processWeatherData(location);
    console.log('weatherObject');
    console.log(weatherObject);

    //Create location info element
    const locationInfoElement = document.createElement('h2');
    locationInfoElement.classList.add('location-info');
    locationInfoElement.textContent =
      weatherObject.location.name +
      ', ' +
      weatherObject.location.region +
      ', ' +
      weatherObject.location.country;

    forecastElement.appendChild(locationInfoElement);

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
      const headers = ['', 'Hour', 'Temperature', 'Humidity', 'Condition', 'Wind', 'Rain Chance'];
      const headerClasses = ['hour', 'temp', 'humidity', 'condition', 'wind', 'rain-chance'];

      headers.forEach((headerText, index) => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerCell.classList.add(headerClasses[index - 1]); // Add class to header cell
        headerRow.appendChild(headerCell);
      });

      table.appendChild(headerRow);

      //Create table rows
      dayObject.hour.forEach((hourObject) => {
        const hourRow = document.createElement('tr');

        const iconCell = document.createElement('td');
        const iconImg = document.createElement('img');
        iconImg.classList.add('condition-icon');
        iconImg.src = hourObject.condition.icon;
        iconCell.appendChild(iconImg);
        hourRow.appendChild(iconCell);

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
  } catch {
    const errorMessage = "Location's forecast not found. Please check the spelling.";
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = errorMessage;
    containerElement.appendChild(errorElement);
  }
}
