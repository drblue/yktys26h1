/**
 * All communication with the backend REST-API (`json-server`)
 */

import type { Todo } from "./TodoAPI.types";

const BASE_URL = "http://localhost:3000";

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
