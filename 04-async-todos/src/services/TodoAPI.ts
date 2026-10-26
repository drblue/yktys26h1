/**
 * All communication with the backend REST-API (`json-server`)
 */

import axios from "axios";
import type { APIResult, CreateTodoPayload, Todo, UpdateTodoPayload } from "./TodoAPI.types";

const BASE_URL = "http://localhost:3000";

/**
 * Get todos from API using axios 🤘🏻🎸
 */
export const getTodos = async (): Promise<APIResult<Todo[]>> => {
	try {
		const res = await axios.get<Todo[]>(BASE_URL + "/todos");
		return {
			status: "success",
			data: res.data,
		}

	} catch (err) {
		return {
			status: "error",
			message: (err instanceof Error)
				? err.message
				: "Something went wrong. Try again?",
		}
	}
}

/**
 * Create a todo in the API
 */
export const createTodo = async (payload: CreateTodoPayload) => {
	const res = await axios.post<Todo>(BASE_URL + "/todos", payload);
	return res.data;
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
