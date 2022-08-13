import searchCityWeatherData from './weather';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getuserInput();
});

function getuserInput() {
  const userInput = document.querySelector('.input-city');
  const cityName = userInput.value;
  searchCityWeatherData().requestWeatherData(cityName);
}
