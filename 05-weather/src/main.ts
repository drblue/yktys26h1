import "./assets/scss/app.scss";
import { getWeather } from "./services/OWMAPI";
import type { CurrentWeather } from "./services/OWMAPI.types";

/**
 * DOM references
 */
const searchFormEl = document.querySelector<HTMLFormElement>("#search-form")!;
const cityEl = document.querySelector<HTMLInputElement>("#city")!;
const weatherEl = document.querySelector<HTMLElement>("#weather")!;
const weatherCityEl = document.querySelector<HTMLHeadingElement>("#weather-city")!;
const weatherTemperatureEl = document.querySelector<HTMLParagraphElement>("#weather-temp")!;
const weatherDescriptionEl = document.querySelector<HTMLParagraphElement>("#weather-description")!;

/**
 * Search for weather when the form is submitted
 */
searchFormEl.addEventListener("submit", async (e) => {
	e.preventDefault();

	// Get city user wants weather for
	const city = cityEl.value.trim();
	if (!city) {
		return;
	}

	// Call API and request current weather
	const weather = await getWeather(city);
	renderWeather(weather);
});

/**
 * Render the current weather returned by the API
 */
const renderWeather = (weather: CurrentWeather) => {
	weatherCityEl.textContent = weather.name;
	weatherTemperatureEl.textContent = weather.main.temp + " °C";
	weatherDescriptionEl.textContent = weather.weather[0]?.description ?? "Unknown weather";
	weatherEl.hidden = false;
}
