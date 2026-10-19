/**
 * API Client/Service for communicating with OpenWeatherMap
 * <https://openweathermap.org/api/current>
 */
import axios from "axios";
import type { CurrentWeather, WeatherResult } from "./OWMAPI.types";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_OWMAPI_KEY;

/**
 * Get current weather for a city
 * https://api.openweathermap.org/data/2.5/weather?q=Göteborg&appid={{OWM_API_KEY}}&units=metric
 */
export const getWeather = async (city: string): Promise<WeatherResult> => {
	// Check if API_KEY is empty
	if (!API_KEY) {
		return { status: "error", message: "API key missing. Please set VITE_OWMAPI_KEY in .env.local and restart the app." }
	}

	try {
		const res = await axios.get<CurrentWeather>(BASE_URL + `/weather`, {
			params: {
				q: city,
				appid: API_KEY,
				units: "metric",
			},
		});

		// Fake a slow API
		await new Promise(r => setTimeout(r, 1500));

		return { status: "success", data: res.data }

	} catch (err) {
		console.error("Error in getWeather:", err);
		if (axios.isAxiosError(err)) {
			// Some network-related error occurred

			// Is it a 404 (Not Found)?
			if (err.response?.status === 404) {
				return { status: "error", message: "Could not find city with that name. Try another city name." }
			}

			// Is it a 401 (Unauthorized)?
			if (err.response?.status === 401) {
				return { status: "error", message: "API key is invalid or not yet activated." }
			}
		}

		return { status: "error", message: "Could not get weather. Try again later." }
	}
}
