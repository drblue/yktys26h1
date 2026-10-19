/**
 * OpenWeatherMap types
 */

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
	}
}
