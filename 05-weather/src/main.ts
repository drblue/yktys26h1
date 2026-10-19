import "./assets/scss/app.scss";

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
 * Show example weather when the form is submitted
 */
searchFormEl.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get city user wants weather for
	const city = cityEl.value.trim();
	if (!city) {
		return;
	}

	weatherCityEl.textContent = city;
	weatherTemperatureEl.textContent = "12.5 °C";
	weatherDescriptionEl.textContent = "Black with green characters raining";
	weatherEl.hidden = false;
});
