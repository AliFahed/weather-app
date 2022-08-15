import searchCityWeatherData from './weather';

const getWeatherDataAfterProcess = (weatherData) => {
  displayCityWeatherData().displayDataInSearchWeatherContainer(weatherData);

  return { weatherData };
};

const displayCityWeatherData = () => {
  const displayDataInSearchWeatherContainer = (weatherData) => {
    // select specific dom elements
    const currentWeather = document.querySelector('[data-current-weather]');
    const currentWeatherDescription = document.querySelector(
      '[data-current-weather-description]'
    );
    const cityName = document.querySelector('[data-city-name]');
    const cityTimezone = document.querySelector('[data-city-timezone]');
    const cityTemperature = document.querySelector('[data-city-temperature]');

    // update dom elemnts
    /**
     * left side are variables linked with dom elements,
     * while right side are weatherData object values from the API
     */
    currentWeather.textContent = weatherData.currentWeather;
    currentWeatherDescription.textContent =
      weatherData.currentWeatherDescription;
    cityName.textContent = weatherData.cityName;
    cityTimezone.textContent = weatherData.cityTimezone;
    cityTemperature.textContent = weatherData.temperature;

    console.log(weatherData);
  };

  return { displayDataInSearchWeatherContainer };
};

export default getWeatherDataAfterProcess;
