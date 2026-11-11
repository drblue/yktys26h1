/**
 * All communication with the backend REST-API (Express)
 */

import { BASE_URL, get, http, patch, post } from "./http";
import type { CreateTodoPayload, Todo, UpdateTodoPayload } from "./TodoAPI.types";

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
	return patch<Todo>("/todos/" + id, payload);
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
