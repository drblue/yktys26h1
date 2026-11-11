/**
 * All communication with the backend REST-API (Express)
 */

import { get } from "./http";
import type { Book } from "./BooksAPI.types";

/**
 * Get books from API using axios
 */
export const getBooks = async () => {
	return get<Book[]>("/books");
}
