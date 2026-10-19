/**
 * OpenWeatherMap types
 */

/**
 * OpenWeatherMap fields used by this app
 */
export interface Percipitation {
	"1h": number;
}

export interface CurrentWeather {
	name: string;
	main: {
		temp: number;
	};
	weather: {
		description: string;
	}[];
	sys: {
		country: string;
	};
	rain?: Percipitation;
	snow?: Percipitation;
}

/**
 * The app's own result-type
 */
export interface WeatherResultSuccess {
	status: "success";
	data: CurrentWeather;
}

export interface WeatherResultError {
	status: "error";
	message: string;
}

export type WeatherResult = WeatherResultSuccess | WeatherResultError;
