const searchCityWeatherData = () => {
  async function requestWeatherData(cityName) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de89be8b9bd523c9c86a7f3b0194631c`,
        { mode: 'cors' }
      );
      const getWeatherData = await response.json();
      processResponseWeatherData(getWeatherData);
    } catch (err) {
      console.log(err);
    }
  }

  function processResponseWeatherData(getWeatherData) {
    const weatherDetails = {
      cityName: getWeatherData.name,
      feelsLike: getWeatherData.main.feels_like,
      humidity: getWeatherData.main.humidity,
      temperature: getWeatherData.main.temp,
      maximumTemperature: getWeatherData.main.temp_max,
      minimumTemperature: getWeatherData.main.temp_min,
      currentWeather: getWeatherData.weather[0].main,
      currentWeatherDescription: getWeatherData.weather[0].description,
      cityTimezone: getWeatherData.timezone,
      windSpeed: getWeatherData.wind.speed,
    };

    console.log(weatherDetails);

    return { weatherDetails };
  }

  return { requestWeatherData, processResponseWeatherData };
};

export default searchCityWeatherData;
