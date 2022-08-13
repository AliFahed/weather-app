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
      name: getWeatherData.name,
      id: getWeatherData.id,
      currentWeather: getWeatherData.weather[0].main,
    };

    console.log(weatherDetails);
  }

  return { requestWeatherData };
};

export default searchCityWeatherData;
