import "./assets/scss/app.scss";
import { getWeather } from "./services/OWMAPI";
import type { CurrentWeather } from "./services/OWMAPI.types";

/**
 * DOM references
 */
const searchFormEl = document.querySelector<HTMLFormElement>("#search-form")!;
const cityEl = document.querySelector<HTMLInputElement>("#city")!;
const errorEl = document.querySelector<HTMLDivElement>("#error")!;
const loadingEl = document.querySelector<HTMLParagraphElement>("#loading")!;
const searchButtonEl = document.querySelector<HTMLButtonElement>("#search-button")!;
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

	// Set loading state
	errorEl.hidden = true;
	loadingEl.hidden = false;
	searchButtonEl.disabled = true;
	weatherEl.hidden = true;

	// Call API and request current weather
	const result = await getWeather(city);
//        ^?

	if (result.status === "error") {
		// `result` has been narrowed to `WeatherResultError`
		// Set error message, show error, hide loading, enable button
		errorEl.textContent = result.message;
//                        ^?
		errorEl.hidden = false;
		loadingEl.hidden = true;
		searchButtonEl.disabled = false;
		return;
	}

	// `result` has been narrowed to `WeatherResultSuccess`
	renderWeather(result.data);

	// Clear input, hide loading, enable button, show weather
	cityEl.value = "";
	loadingEl.hidden = true;
	searchButtonEl.disabled = false;
	weatherEl.hidden = false;
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
