//Return a Promise json object with weatherAPI data from a given location
async function getWeatherData(location) {
  const response = await fetch(
    'http://api.weatherapi.com/v1/forecast.json?key=6bcec4ff459e420085d145709240705&days=3&q=' +
      location,
    { mode: 'cors' }
  );
  const weatherData = response.json();
  return weatherData;
}

//Process and return the response from getWeatherData
export default async function processWeatherData(location) {
  const weatherData = await getWeatherData(location);
  const weatherObject = {
    location: weatherData.location,
    current: weatherData.current,
    forecast: weatherData.forecast
  };
  return weatherObject;
}
