/**
 * API Client/Service for communicating with OpenWeatherMap
 * <https://openweathermap.org/api/current>
 */
import axios from "axios";
import type { CurrentWeather } from "./OWMAPI.types";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_OWMAPI_KEY;

// Check if API_KEY is empty
if (!API_KEY) {
	throw new Error("VITE_OWMAPI_KEY not defined in environment variables");
}

/**
 * Get current weather for a city
 * https://api.openweathermap.org/data/2.5/weather?q=Göteborg&appid={{OWM_API_KEY}}&units=metric
 */
export const getWeather = async (city: string) => {
	const res = await axios.get<CurrentWeather>(BASE_URL + `/weather`, {
		params: {
			q: city,
			appid: API_KEY,
			units: "metric",
		},
	});

	// Fake a slow API
	await new Promise(r => setTimeout(r, 1500));

	return res.data;
}
