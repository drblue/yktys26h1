import axios from "axios";

// Generic type that accepts a type-argument and uses it to type `data`
export interface APISuccessResult<T> {
	status: "success";
	data: T;
}

export interface APIErrorResult {
	status: "error";
	message: string;
}

// Union that takes in a type-argument and passes it along to APISuccessResult
export type APIResult<T> = APIErrorResult | APISuccessResult<T>;

export const BASE_URL = "http://localhost:3001";

// Create a new axios instance
export const http = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Accept": "application/json",
	},
	timeout: 10000,  // 10 seconds
});

/**
 * Build success-result
 */
const success = <T>(data: T): APISuccessResult<T> => {
	return {
		status: "success",
		data,  // data: data
	}
}

/**
 * Build error-result
 */
const error = (err: unknown): APIErrorResult => {
	return {
		status: "error",
		message: (err instanceof Error)
			? err.message
			: "Something went wrong. Try again?",
	}
}

/**
 * Make a generic HTTP GET request
 */
export const get = async <T>(endpoint: string): Promise<APIResult<T>> => {
	try {
		const res = await http.get<T>(endpoint);
		return success(res.data);

	} catch (err) {
		return error(err);
	}
}

/**
 * Make a generic HTTP POST request
 */
export const post = async <Response, Payload = unknown>(endpoint: string, payload: Payload): Promise<APIResult<Response>> => {
	try {
		const res = await http.post<Response>(endpoint, payload);
		return success(res.data);

	} catch (err) {
		return error(err);
	}
}

/**
 * Make a generic HTTP PATCH request
 */
export const patch = async <Response, Payload = unknown>(endpoint: string, payload: Payload): Promise<APIResult<Response>> => {
	try {
		const res = await http.patch<Response>(endpoint, payload);
		return success(res.data);

	} catch (err) {
		return error(err);
	}
}
