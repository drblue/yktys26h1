/**
 * All communication with the backend REST-API (`json-server`)
 */

import axios from "axios";
import type { Todo } from "./TodoAPI.types";

const BASE_URL = "http://localhost:3000";

/**
 * Get todos from API using axios 🤘🏻🎸
 */
export const getTodos = async () => {
	const res = await axios.get<Todo[]>(BASE_URL + "/todos");
	return res.data;
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
