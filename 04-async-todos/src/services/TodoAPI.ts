/**
 * All communication with the backend REST-API (`json-server`)
 */

import axios from "axios";
import type { APIErrorResult, APIResult, APISuccessResult, CreateTodoPayload, Todo, UpdateTodoPayload } from "./TodoAPI.types";

const BASE_URL = "http://localhost:3000";

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
const get = async <T>(endpoint: string): Promise<APIResult<T>> => {
	try {
		const res = await axios.get<T>(endpoint);
		return success(res.data);

	} catch (err) {
		return error(err);
	}
}

/**
 * Make a generic HTTP POST request
 */
const post = async <Response, Payload = unknown>(endpoint: string, payload: Payload): Promise<APIResult<Response>> => {
	try {
		const res = await axios.post<Response>(endpoint, payload);
		return success(res.data);

	} catch (err) {
		return error(err);
	}
}

/**
 * Get a single todo from the API
 */
export const getTodo = async (id: number) => {
	return get<Todo>(BASE_URL + "/todos/" + id);
}

/**
 * Get todos from API using axios 🤘🏻🎸
 */
export const getTodos = async () => {
	return get<Todo[]>(BASE_URL + "/todos");
}

/**
 * Create a todo in the API
 */
export const createTodo = async (payload: CreateTodoPayload) => {
	return post<Todo>(BASE_URL + "/todos", payload);
}

/**
 * Update a todo in the API
 */
export const updateTodo = async (id: number, payload: UpdateTodoPayload) => {
	const res = await axios.patch<Todo>(BASE_URL + "/todos/" + id, payload);
	return res.data;
}

/**
 * Delete a todo from the API
 */
export const deleteTodo = async (id: number) => {
	await axios.delete(BASE_URL + "/todos/" + id);
	return true;
}

/**
 * Get todos from API using fetch
 */
export const fetchTodos = async () => {
	const res = await fetch(BASE_URL + "/todos");
	if (!res.ok) {
		throw new Error("Response was not OK but neither am I");
	}

	const data = await res.json() as Todo[];

	return data;
}
