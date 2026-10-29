/**
 * All communication with the backend REST-API (`json-server`)
 */

import axios from "axios";
import type { APIErrorResult, APIResult, APISuccessResult, CreateTodoPayload, Todo, UpdateTodoPayload } from "./TodoAPI.types";

const BASE_URL = "http://localhost:3000";

// Create a new axios instance
const http = axios.create({
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
const get = async <T>(endpoint: string): Promise<APIResult<T>> => {
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
const post = async <Response, Payload = unknown>(endpoint: string, payload: Payload): Promise<APIResult<Response>> => {
	try {
		const res = await http.post<Response>(endpoint, payload);
		return success(res.data);

	} catch (err) {
		return error(err);
	}
}

/**
 * Get a single todo from the API
 */
export const getTodo = async (id: number) => {
	return get<Todo>("/todos/" + id);
}

/**
 * Get todos from API using axios 🤘🏻🎸
 */
export const getTodos = async () => {
	return get<Todo[]>("/todos");
}

/**
 * Create a todo in the API
 */
export const createTodo = async (payload: CreateTodoPayload) => {
	return post<Todo>("/todos", payload);
}

/**
 * Update a todo in the API
 */
export const updateTodo = async (id: number, payload: UpdateTodoPayload) => {
	const res = await http.patch<Todo>("/todos/" + id, payload);
	return res.data;
}

/**
 * Delete a todo from the API
 */
export const deleteTodo = async (id: number) => {
	await http.delete("/todos/" + id);
	return true;
}

/***********************************************
 *
 * 🐉🐲 BEWARE OF DRAGONS 🐲🐉
 *
 ***********************************************/

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
