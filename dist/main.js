/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\nconst getWeatherDataAfterProcess = (weatherData) => {\r\n  displayCityWeatherData().displayDataInSearchWeatherContainer(weatherData);\r\n\r\n  return { weatherData };\r\n};\r\n\r\nconst displayCityWeatherData = () => {\r\n  const displayDataInSearchWeatherContainer = (weatherData) => {\r\n    // select specific dom elements\r\n    const currentWeather = document.querySelector('[data-current-weather]');\r\n    const currentWeatherDescription = document.querySelector(\r\n      '[data-current-weather-description]'\r\n    );\r\n    const cityName = document.querySelector('[data-city-name]');\r\n    const cityTimezone = document.querySelector('[data-city-timezone]');\r\n    const cityTemperature = document.querySelector('[data-city-temperature]');\r\n\r\n    // update dom elemnts\r\n    /**\r\n     * left side are variables linked with dom elements,\r\n     * while right side are weatherData object values from the API\r\n     */\r\n    currentWeather.textContent = weatherData.currentWeather;\r\n    currentWeatherDescription.textContent =\r\n      weatherData.currentWeatherDescription;\r\n    cityName.textContent = weatherData.cityName;\r\n    cityTimezone.textContent = weatherData.cityTimezone;\r\n    cityTemperature.textContent = weatherData.temperature;\r\n\r\n    console.log(weatherData);\r\n  };\r\n\r\n  return { displayDataInSearchWeatherContainer };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherDataAfterProcess);\r\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\nconst form = document.querySelector('form');\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  getuserInput();\r\n});\r\n\r\nfunction getuserInput() {\r\n  const userInput = document.querySelector('.input-city');\r\n  const cityName = userInput.value;\r\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().requestWeatherData(cityName);\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\nconst searchCityWeatherData = () => {\r\n  async function requestWeatherData(cityName) {\r\n    try {\r\n      const response = await fetch(\r\n        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de89be8b9bd523c9c86a7f3b0194631c`,\r\n        { mode: 'cors' }\r\n      );\r\n      const getWeatherData = await response.json();\r\n      processResponseWeatherData(getWeatherData);\r\n    } catch (err) {\r\n      console.log(err);\r\n    }\r\n  }\r\n\r\n  function processResponseWeatherData(getWeatherData) {\r\n    const weatherData = {\r\n      cityName: getWeatherData.name,\r\n      feelsLike: getWeatherData.main.feels_like,\r\n      humidity: getWeatherData.main.humidity,\r\n      temperature: getWeatherData.main.temp,\r\n      maximumTemperature: getWeatherData.main.temp_max,\r\n      minimumTemperature: getWeatherData.main.temp_min,\r\n      currentWeather: getWeatherData.weather[0].main,\r\n      currentWeatherDescription: getWeatherData.weather[0].description,\r\n      cityTimezone: getWeatherData.timezone,\r\n      windSpeed: getWeatherData.wind.speed,\r\n    };\r\n\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData);\r\n\r\n    return { weatherData };\r\n  }\r\n\r\n  return { requestWeatherData, processResponseWeatherData };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCityWeatherData);\r\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;